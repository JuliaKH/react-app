import {ACTION_CHANGE_INPUT_VALUE} from '../index'

export const changeValue = (newValue) => {
    return {
        type: ACTION_CHANGE_INPUT_VALUE,
        payload: newValue
    }
};


export const takeData = (index) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
            .then(response => response.json())
            .then(json => dispatch(changeValue(json)))
    }
};
