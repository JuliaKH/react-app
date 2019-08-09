import {
    ADD_IMAGES_SUCCESS,
    ADD_IMAGES_FAILURE,
    ADD_IMAGES_STARTED,
} from '../store/actionTypes';

const initialState = {
    loading: false,
    images: [],
    error: null
};

export default function ImageReducer(state = initialState, action) {
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
