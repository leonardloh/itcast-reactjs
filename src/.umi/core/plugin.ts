// @ts-nocheck
import { Plugin } from 'D:/Repos/itcast-reactjs/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('D:/Repos/itcast-reactjs/src/.umi/plugin-dva/runtime.tsx'),
  path: 'D:/Repos/itcast-reactjs/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
