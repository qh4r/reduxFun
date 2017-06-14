// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
          System.import('containers/Navigation/reducer'),
          System.import('containers/Navigation/sagas'),
          System.import('containers/LinksListContainer/reducer'),
          System.import('containers/LinksListContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        // TRZEBA ZAREJESTROWAC WSZYSTKIE WYMAGANE REDUCERY I SAGI ~ dekompoozycja tablicy
        importModules.then(([component, navReducer, navSagas, linksReducer, linksSagas]) => {
          injectReducer('navigation', navReducer.default);
          injectSagas('navigation', navSagas.default);
          injectReducer('linksListContainer', linksReducer.default);
          injectSagas('linksListContainer', linksSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
