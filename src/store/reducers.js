import {ACTION_CHANGE_INPUT_VALUE} from "./actionTypes";

import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';


const initialState ={
    value: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_INPUT_VALUE:
            return {...state, value: action.payload};
        default: return state;
    }
};

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
export default combineReducers({
    items
});
