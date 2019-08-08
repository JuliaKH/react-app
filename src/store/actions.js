import { ACTION_CHANGE_INPUT_VALUE } from './actionTypes'

export const changeValue = (newValue) => {
    return{
        type: ACTION_CHANGE_INPUT_VALUE,
        payload: newValue
    }
};


export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

