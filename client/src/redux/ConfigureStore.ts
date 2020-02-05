import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

    const store = createStore(
        combineReducers({}),
        composeWithDevTools(applyMiddleware(...middleware)),
    );

    return store;
};

export default ConfigureStore;
