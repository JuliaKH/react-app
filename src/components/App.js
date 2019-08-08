import React, { Component } from 'react'
import Header from './Header/Header'
import ImageList from './ImageList/ImageList';
import {onSearchSubmit} from "../store/actions";
import connect from "react-redux/es/connect/connect";

class App extends Component {
    state = { images: [] };
    // go into service

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

    render() {
        // const {images} = this.props
        return(
            <div>
                {/*<Header userSubmit={this.onSearchSubmit}/>*/}
                <Header userSubmit={this.props.SearchSubmit}/>
                <ImageList foundImages={this.state.images} />
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SearchSubmit: todo => {
            dispatch(onSearchSubmit(todo));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(App);

// export default App
// add connect to redux, get images from it
