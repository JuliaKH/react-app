import {
    ADD_IMAGES_SUCCESS,
    ADD_IMAGES_FAILURE,
    ADD_IMAGES_STARTED,
} from './actionTypes';

import axios from 'axios';

export const onSearchSubmit = ( title ) => {
    return dispatch => {
        dispatch(addImagesStarted());
        console.log('123');
        const options = {
            params: {
                query: title ,
                per_page: 20
            },
            headers: {
                Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            }
        };
        axios
            .get('https://api.unsplash.com/search/photos', options)
            .then(res => {
                dispatch(addImagesSuccess(res.data));
                console.log(res.data);
                console.log('456');
            })
            .catch(err => {
                dispatch(addImagesFailure(err.message));
                console.log(err);
            });
    };
};

const addImagesSuccess = images => ({
    type: ADD_IMAGES_SUCCESS,
    payload: {
        ...images
    }
});

const addImagesStarted = () => ({
    type: ADD_IMAGES_STARTED
});

const addImagesFailure = error => ({
    type: ADD_IMAGES_FAILURE,
    payload: {
        error
    }
});