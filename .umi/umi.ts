

import { plugin } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from '/Users/william/Documents/myapp/node_modules/@umijs/runtime/dist/index.js';
import { renderClient } from '/Users/william/Documents/myapp/node_modules/@umijs/renderer-react/dist/index.js';




const clientRender = plugin.applyPlugins({
  key: 'render',
  type: ApplyPluginsType.compose,
  initialValue: () => {
    return renderClient({
      // @ts-ignore
      routes: require('./core/routes').routes,
      plugin,
      history: createHistory(),
      rootElement: 'root',
      defaultTitle: '',
    });
  },
  args: {},
});

export default clientRender();


    window.g_umi = {
      version: '3.0.0-beta.38',
    };
  

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    clientRender();
  });
}
