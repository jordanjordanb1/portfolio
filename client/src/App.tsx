import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch></Switch>
            </BrowserRouter>
        </Provider>
    );
}
