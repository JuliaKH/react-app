import React, { Component } from 'react'
import Header from './Header/Header'
import axios from "axios";
import ImageList from './ImageList/ImageList';

class App extends Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            }
        });
        console.log(response);
        this.setState({ images: response.data.results })
    };
    render() {
        return(
            <div>
                <Header userSubmit={this.onSearchSubmit}/>
                <ImageList foundImages={this.state.images} />
            </div>

        )
    }
}

export default App
