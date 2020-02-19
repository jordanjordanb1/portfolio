import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isProd } from '../config';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Middleware } from 'redux';
import projects from './reducers/projects';

export const ConfigureStore = () => {
    let middleware: Middleware[] = [];

    if (isProd()) {
        middleware = [...middleware, thunk];
    } else {
        middleware = [...middleware, thunk, logger];
    }

    const store = createStore(
        combineReducers({ projects }),
        composeWithDevTools(applyMiddleware(...middleware)),
    );

    return store;
};

export default ConfigureStore;
