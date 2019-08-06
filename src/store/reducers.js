import {ACTION_CHANGE_INPUT_VALUE} from "./actionTypes";

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
