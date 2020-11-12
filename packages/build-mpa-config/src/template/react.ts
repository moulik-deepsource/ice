export default ({ resourcePath }) => {
  const source = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Component from '${resourcePath}';

  async function renderApp() {
    const isSSR = window.__ICE_SSR_ENABLED__;
    let comProps = {};
    // process App.getInitialProps
    if (isSSR && window.__ICE_PAGE_PROPS__) {
      comProps = window.__ICE_PAGE_PROPS__;
    }
    ReactDOM[isSSR ? 'hydrate' : 'render'](<Component {...comProps} />, document.getElementById('ice-conntainer'));
  }
  renderApp();
  `;
  return source;
};