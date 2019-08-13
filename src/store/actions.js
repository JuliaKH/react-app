import {
    ADD_IMAGES_SUCCESS,
    ADD_IMAGES_FAILURE,
    ADD_IMAGES_STARTED,
    GET_COLLECTIONS_SUCCESS,
    GET_COLLECTIONS_STARTED,
    GET_COLLECTIONS_FAILURE
} from './actionTypes';

import axios from 'axios';

export const addImagesSuccess = images => ({
    type: ADD_IMAGES_SUCCESS,
    payload: {
        ...images
    }
});

export const addImagesStarted = () => ({
    type: ADD_IMAGES_STARTED
});

export const addImagesFailure = error => ({
    type: ADD_IMAGES_FAILURE,
    payload: {
        error
    }
});

export const getCollectionsSuccess = collections => ({
    type: GET_COLLECTIONS_SUCCESS,
    payload: {
        ...collections
    }
});

export const getCollectionsStarted = () => ({
    type: GET_COLLECTIONS_STARTED
});

export const getCollectionsFailure = error => ({
    type: GET_COLLECTIONS_FAILURE,
    payload: {
        error
    }
});
