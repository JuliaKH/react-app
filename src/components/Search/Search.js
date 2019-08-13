import React, { Component } from 'react'
import './Search.scss'
import search from '../../assets/images/search.svg'
import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types";

class Search extends Component{

    searchPlaceholderText = 'Search images...';
    state = { value: '', redirect: false };

    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    };

    goHome() {
        this.props.history.push('/images')
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.value);
        this.goHome();
        console.log(this.state.redirect);
    };

    render() {
        return(
            <form className="search" onSubmit={this.onFormSubmit}>
                <input type="text" className="search__input"
                       placeholder={this.searchPlaceholderText}
                       value={this.props.value}
                       onChange={this.onInputChange}
                />
                <button type="submit" className="search__button"><img src={search} alt="search"/></button>
            </form>
        )

    }
}
Search.propTypes = {
    userSubmit: PropTypes.func
};

export default withRouter(Search)
