import React, { Component } from 'react'
import './Search.scss'
import search from '../../assets/images/search.svg'

class Search extends Component{
    render() {
        return(
            <div className="search">
                <button className="search__button"><img src={search} alt="search"/></button>
                <input type="text" className="search__input"/>
            </div>
        )
        
    }
}

export default Search
