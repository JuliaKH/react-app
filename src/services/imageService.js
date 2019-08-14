import axios from "axios";
import {addImagesStarted, addImagesSuccess, addImagesFailure} from '../store/actions'

export const onSearchSubmit = ( title ) => {
    return dispatch => {
        dispatch(addImagesStarted());
        const options = {
            params: {
                query: title,
                per_page: 30
            },
            headers: {
                Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            }
        };
        axios
            .get('https://api.unsplash.com/search/photos', options)
            .then(res => {
                dispatch(addImagesSuccess(res.data.results));
                // console.log(res.data.results);
            })
            .catch(err => {
                dispatch(addImagesFailure(err.message));
                console.log(err);
            });
    };
};
