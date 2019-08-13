import {
    ADD_IMAGES_SUCCESS,
    ADD_IMAGES_FAILURE,
    ADD_IMAGES_STARTED,
    GET_COLLECTIONS_SUCCESS,
    GET_COLLECTIONS_FAILURE,
    GET_COLLECTIONS_STARTED
} from '../store/actionTypes';
import {combineReducers} from "redux";

const initialState = {
    loading: false,
    images: [],
    error: null,
    collect_loading: false,
    collections: [],
    collect_error: null
};

export function ImageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_IMAGES_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                // images: [...state.images, action.payload]
                images: Object.assign(state.images, action.payload)
            };
        case ADD_IMAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}
export function CollectionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COLLECTIONS_STARTED:
            return {
                ...state,
                collect_loading: true
            };
        case GET_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collect_loading: false,
                collect_error: null,
                // images: [...state.images, action.payload]
                collections: Object.assign(state.collections, action.payload)
            };
        case GET_COLLECTIONS_FAILURE:
            return {
                ...state,
                collect_loading: false,
                collect_error: action.payload.error
            };
        default:
            return state;
    }
}

export default combineReducers ({
    ImageReducer,
    CollectionReducer
});
