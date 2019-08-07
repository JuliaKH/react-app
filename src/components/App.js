import React, { Component } from 'react'
import Header from './Header/Header'
import axios from "axios";
import ImageList from './ImageList/ImageList';
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: "5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b",
    secret: "4d06872ad12bef5338ff8e64b9324d488905a04733fbe6e76ca5901ff889f8cf"
});

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
        axios.get('https://api.unsplash.com/search/photos', options)
            .then((response) => {
                this.setState({
                    images: response.data.results
                });
                console.log(this.state);
            })
                .catch((mes) => {
                   console.log(mes);
                });
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

export default App
// add connect to redux, get images from it
