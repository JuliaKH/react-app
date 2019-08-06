import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import {createStore, bindActionCreators, applyMiddleware} from "redux";
import { Provider } from 'react-redux'
import {reducer} from "./store/reducers";
import  {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const ACTION_CHANGE_INPUT_VALUE = 'ACTION_CHANGE_INPUT_VALUE';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
                document.getElementById('root')
            );



