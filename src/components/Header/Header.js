import React, { Component } from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.png'
import Search from '../Search/Search'
import {Link} from "react-router-dom";
import Login from '../Login/Login'
import PropTypes from 'prop-types'

class Header extends Component{

    render(){
        return(
            <header className="header">
                <div className="header-container">
                    <Link to={'/'}><img src={logo} alt="logo" className="header__logo"/></Link>
                    <Search userSubmit={this.props.userSubmit} />
                    {/*<Search userSubmit={this.props.userSubmit} />*/}
                    {/*<Login/>*/}
                </div>
            </header>
        )
}
}

Header.propTypes = {
    userSubmit: PropTypes.func
};
export default Header
