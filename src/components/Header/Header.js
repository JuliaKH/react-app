import React, { Component } from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.png'
import Search from '../Search/Search'

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header className="header">
                <div className="container">
                    <img src={logo} alt="logo" className="header__logo"/>
                    <Search />
                </div>

            </header>
        )
}
}

export default Header
