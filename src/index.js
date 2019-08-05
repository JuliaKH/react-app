import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import {createStore} from "redux";
ReactDOM.render(<App />, document.getElementById('root'));


const image = (state = []) => state;
const store = createStore(image);

store.subscribe(() => {
    console.log(store.getState());
});
