import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ImageCard from "./components/ImageCard/ImageCard";
import ImageList from "./components/ImageList/ImageList";
import Header from "./components/Header/Header";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

