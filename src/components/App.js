import React, { Component } from 'react'
import connect from "react-redux/es/connect/connect";
import { Switch, Route } from "react-router-dom";
import Header from './Header/Header'
import Collections from "./Collections/Collections";
import ImageList from '../pages/ImageList/ImageList';
import ImageCard from "../pages/ImageCard/ImageCard";
import CollectionPage from "../pages/CollectionPage";
import Home from "../pages/Home";
import { onSearchSubmit } from '../services/imageService'
import { getCollections } from "../services/collectionService";

class App extends Component {

    render() {
        const {images, collections} = this.props;
        return(
            <div>
                <Header userSubmit={this.props.SearchSubmit}/>
                <Collections foundCollections = {collections} getCollections={this.props.getCollections} />
                <Switch>
                    <Route exact path="/" render={() => <Home foundImages={images} userSubmit={this.props.SearchSubmit} />} />
                    <Route exact path="/images" render={() => <ImageList foundImages={images} userSubmit={this.props.SearchSubmit} />} />
                    <Route path="/collection/:id" render={(props) => <CollectionPage {...props}/>} />
                    <Route exact path="/images/:id" render={(props) => <ImageCard {...props} />} />
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
