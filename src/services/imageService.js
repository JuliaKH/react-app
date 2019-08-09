// import axios from "axios";
// import {addImages} from "../store/actions";
// import {store} from "../store";
//
// class imageService {
//     onSearchSubmit = async (term) => {
//         const response = await axios.get('https://api.unsplash.com/search/photos', {
//             params: {
//                 query: term,
//                 per_page: 20
//             },
//             headers: {
//                 Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
//             }
//         });
//         console.log(response);
//         dispatch(addImages(response.data.results));
//
//         console.log(store.getState());
//         // this.setState({ images: response.data.results })
//     };
// }
//
// export default new imageService();
