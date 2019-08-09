import React, { Component } from 'react'
import Header from './Header/Header'
import ImageList from './ImageList/ImageList';
import {onSearchSubmit} from "../store/actions";
import connect from "react-redux/es/connect/connect";

class App extends Component {
    // state = { images: [] };
    // go into service

    render() {
        const {images} = this.props;
        // console.log(images);
        return(
            <div>
                {/*<Header userSubmit={this.onSearchSubmit}/>*/}
                <Header userSubmit={this.props.SearchSubmit}/>
                <ImageList foundImages={images} />
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        images: state.images,
        error: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        SearchSubmit: todo => {
            dispatch(onSearchSubmit(todo));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

// export default App
// add connect to redux, get images from it
