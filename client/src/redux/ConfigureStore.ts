import { createStore, combineReducers, applyMiddleware } from 'redux';
import { isProd } from '../config';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    let middleware: any[] = [];

    if (isProd()) {
        middleware = [...middleware, thunk];
    } else {
        middleware = [...middleware, thunk, logger];
    }

    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null;

    const store = createStore(
        combineReducers({}),
        composeEnhancers(applyMiddleware(...middleware)),
    );

    return store;
};

export default ConfigureStore;
