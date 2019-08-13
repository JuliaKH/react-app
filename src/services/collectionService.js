import axios from "axios";
import { getCollectionsStarted, getCollectionsSuccess, getCollectionsFailure } from '../store/actions'

export const getCollections = () => {
    return dispatch => {
        dispatch(getCollectionsStarted());
        const options = {
            params: {
                per_page: 10
            },
            headers: {
                Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            }
        };
        axios
            .get('https://api.unsplash.com/collections', options)
            .then(res => {
                dispatch(getCollectionsSuccess(res.data));
                // console.log(res.data);
            })
            .catch(err => {
                dispatch(getCollectionsFailure(err.message));
                console.log(err);
            });
    };
};
