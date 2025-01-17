const { unionBy } = require('@builder/app-helpers');
const defaultConfigKeys = require('./config/default.config');
const validation = require('./config/validation');
const modifyUserConfig = require('./utils/modifyUserConfig');

// TODO: move to build-plugin-react-app ?
const CONFIG = [{
  name: 'modeConfig',
  validation: 'object',
  defaultValue: {},
}, {
  name: 'disableRuntime',
  validation: 'boolean',
  defaultValue: false,
  configWebpack: () => {}
}];

module.exports = (api, options = {}) => {
  const { registerUserConfig, log } = api;
  const { customConfigs } = options;
  CONFIG.forEach((item) => registerUserConfig(item));

  // sort config key to make sure entry config is always excute before injectBabel
  const configKeys = Object.keys(defaultConfigKeys);

  const defaultConfig = configKeys.map((configKey) => {
    let configFunc = null;
    let configValidation = null;
    try {
      // eslint-disable-next-line
      configFunc = require(`./userConfig/${configKey}`);
      configValidation = validation[configKey];
    } catch (err) {
      log.error(err);
    }

    if (configFunc && configValidation) {
      return {
        name: configKey,
        validation: configValidation,
        configWebpack: configFunc,
        defaultValue: defaultConfigKeys[configKey],
      };
    }
    return false;
  }).filter(Boolean);

  const finalyConfig = unionBy(defaultConfig.concat(customConfigs), 'name');
  // register user config
  registerUserConfig(finalyConfig.sort((curr, next) => curr.name.localeCompare(next.name)));
  // modify user config to keep excute order
  modifyUserConfig(api, finalyConfig);
};
