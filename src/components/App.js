import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header/Header'
import axios from "axios";
import ImageList from './ImageList/ImageList';
import {itemsFetchDataSuccess} from "../store/actions";
import connect from "react-redux/es/connect/connect";

class App extends Component {
    state = { images: [] };
    // go into service
    // onSearchSubmit = async (term) => {
    //     const response = await axios.get('https://api.unsplash.com/search/photos', {
    //         params: {
    //             query: term,
    //             per_page: 20
    //         },
    //         headers: {
    //             Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
    //         }
    //     });
    //     console.log(response);
    //     this.setState({ images: response.data.results })
    // };

    // onSearchSubmit = (term) => {
    //     const options = {
    //         params: {
    //             query: term,
    //             per_page: 20
    //         },
    //         headers: {
    //             Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
    //         }
    //     };
    //     axios.get('https://api.unsplash.com/search/photos', options)
    //         .then((response) => {
    //             this.setState({
    //                 images: response.data.results
    //             });
    //             console.log(this.state);
    //         })
    //             .catch((mes) => {
    //                console.log(mes);
    //             });
    // };

    onSearchSubmit = (term) => {
        const options = {
            params: {
                query: term,
                per_page: 20
            },
            headers: {
                Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            }
        };
        return (dispatch) => {
                axios.get('https://api.unsplash.com/search/photos', options)
                    .then((response) => {
                        dispatch(itemsFetchDataSuccess(response.data.results)) ;
                        console.log(response.data.results);
                    })
                    .catch((mes) => {
                       console.log(mes);
                    });
        };
    };
    render() {
        // const {images} = this.props
        return(
            <div>
                <Header userSubmit={this.onSearchSubmit}/>
                <ImageList foundImages={this.state.images} />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (term) => dispatch(this.onSearchSubmit(term))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App
// add connect to redux, get images from it
