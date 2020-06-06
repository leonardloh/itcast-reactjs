// @ts-nocheck
import { ApplyPluginsType } from 'D:/Repos/itcast-reactjs/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
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
        "path": "/MyTabs",
        "exact": true,
        "component": require('@/pages/MyTabs.js').default
      },
      {
        "path": "/show",
        "exact": true,
        "component": require('@/pages/show.js').default
      },
      {
        "path": "/user/UserAdd",
        "exact": true,
        "component": require('@/pages/user/UserAdd.js').default
      },
      {
        "path": "/user/UserList",
        "exact": true,
        "component": require('@/pages/user/UserList.js').default
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
