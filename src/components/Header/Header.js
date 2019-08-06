import React, { Component } from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.png'
import Search from '../Search/Search'
import Login from '../Login/Login'
// import { WrappedSearch } from '../../index'

class Header extends Component{

    render(){
        return(
            <header className="header">
                <div className="header-container">
                    <a href="#"><img src={logo} alt="logo" className="header__logo"/></a>
                    <Search userSubmit={this.props.userSubmit} />
                    {/*<Search userSubmit={this.props.userSubmit} />*/}
                    <Login></Login>
                </div>
            </header>
        )
}
}

export default Header
