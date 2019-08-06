import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import {createStore, bindActionCreators} from "redux";
import { Provider } from 'react-redux'
import {reducer} from "./store/reducers";

export const ACTION_CHANGE_INPUT_VALUE = 'ACTION_CHANGE_INPUT_VALUE';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

