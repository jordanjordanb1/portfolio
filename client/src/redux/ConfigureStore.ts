import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Middleware } from 'redux';
import projects from './reducers/projects';

export const ConfigureStore = () => {
    let middleware: Middleware[] = [thunk];

    // Adds logger if not in production
    process.env.NODE_ENV !== 'production' && middleware.push(logger)

    const store = createStore(
        combineReducers({ projects }),
        composeWithDevTools(applyMiddleware(...middleware)),
    );

    return store;
};

export default ConfigureStore;
