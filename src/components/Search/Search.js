import React, { Component } from 'react'
import './Search.scss'
import search from '../../assets/images/search.svg'

class Search extends Component{

    searchText = 'Search images...';

    state = { value: '' };
    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.value);
        console.log(this.state.value);
    };
    render() {
        return(
            <form className="search" onSubmit={this.onFormSubmit}>
                    <input type="text" className="search__input"
                           placeholder={this.searchText}
                           value={this.state.value}
                           onChange={this.onInputChange}/>
                    <button type="submit" className="search__button"><img src={search} alt="search"/></button>
            </form>
        )
        
    }
}

export default Search
