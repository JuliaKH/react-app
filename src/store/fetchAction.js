import store from "../store/store";
import axios from "axios";

export const fetch_post = () => {
    return {
        type: "FETCH_USER"
    };
};

export const receive_post = post => {
    return {
        type: "FETCHED_USER",
        data: post
    };
};

export const receive_error = () => {
    return {
        type: "RECEIVE_ERROR"
    };
};

export const onSearchSubmit = (term) => {
    const options = {
        params: {
            query: term,
            per_page: 20
        },
        headers: {
            Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
        }
    };
    store.dispatch(fetch_post());
    return dispatch => {
        axios.get('https://api.unsplash.com/search/photos', options)
            .then((response) => {
                dispatch(receive_post(response.data.results));
                console.log('ok');
            })
            .catch(err => dispatch(receive_error()));
    }
};
