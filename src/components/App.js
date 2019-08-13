import React, { Component } from 'react'
import Header from './Header/Header'
import ImageList from './ImageList/ImageList';
import { onSearchSubmit } from '../services/imageService'
import { getCollections } from "../services/collectionService";
import connect from "react-redux/es/connect/connect";
import ImageCard from "./ImageCard/ImageCard";
import { Switch, Route } from "react-router-dom";
import Collections from "./Collections/Collections";
import {CollectionReducer, ImageReducer} from "../store/reducers";

class App extends Component {

    render() {
        const {images} = this.props;

        return(
            <div>
                <Header userSubmit={this.props.SearchSubmit}/>
                {/*<ImageList foundImages={images} />*/}
                <Switch>
                    <Route exact path="/" render={() => <ImageList foundImages={images} userSubmit={this.props.SearchSubmit} />} />
                    <Route path="/collections" render={() => <Collections getCollections={this.props.getCollections} />} />
                    <Route exact path="/:id" render={(props) => <ImageCard images={images} {...props} />} />
                </Switch>

    </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.ImageReducer.loading,
        images: state.ImageReducer.images,
        error: state.ImageReducer.loading,
        collect_loading: state.CollectionReducer.collect_loading,
        collections: state.CollectionReducer.collections,
        collect_error: state.CollectionReducer.collect_error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        SearchSubmit: todo => {
            dispatch(onSearchSubmit(todo));
        },
        getCollections: () => {
            dispatch(getCollections());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
