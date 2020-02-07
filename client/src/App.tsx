import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import Routing from './components/Routing';

const store = ConfigureStore();

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routing />
            </Provider>
        </BrowserRouter>
    );
}
