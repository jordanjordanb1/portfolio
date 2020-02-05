import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import Home from './components/Home/Home';

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact to="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}
