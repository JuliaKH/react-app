import { ACTION_CHANGE_INPUT_VALUE } from './actionTypes'

export const changeValue = (newValue) => {
    return{
        type: ACTION_CHANGE_INPUT_VALUE,
        payload: newValue
    }
};
