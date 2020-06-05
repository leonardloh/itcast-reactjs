// @ts-nocheck
import { ApplyPluginsType } from 'D:/Repos/itcast-reactjs/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/helloworld",
    "exact": true,
    "component": require('@/pages/helloworld.js').default
  },
  {
    "path": "/Lists",
    "exact": true,
    "component": require('@/pages/Lists.js').default
  },
  {
    "path": "/show",
    "exact": true,
    "component": require('@/pages/show.js').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
