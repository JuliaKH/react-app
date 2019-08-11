import React, { Component } from 'react'
import Header from './Header/Header'
import ImageList from './ImageList/ImageList';
import {onSearchSubmit} from "../store/actions";
import connect from "react-redux/es/connect/connect";
import ImageCard from "./ImageCard/ImageCard";
import { Switch, Route } from "react-router-dom";
import {Router} from 'react-router'

class App extends Component {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    // }

    render() {
        const {images} = this.props;

        return(
            <div>
                <Header userSubmit={this.props.SearchSubmit}/>
                {/*<ImageList foundImages={images} />*/}
                    <Route exact path="/" render={() => <ImageList foundImages={images} userSubmit={this.props.SearchSubmit} />} />
                    <Route path="/:id" render={(props) => <ImageCard images={images} {...props} />} />

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
