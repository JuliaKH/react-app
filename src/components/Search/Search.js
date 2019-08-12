import React, { Component } from 'react'
import './Search.scss'
import search from '../../assets/images/search.svg'
import { Redirect } from 'react-router';
import {withRouter} from 'react-router-dom'

class Search extends Component{

    searchText = 'Search images...';
    state = { value: '', redirect: false };
    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    };

    goHome() {
        this.props.history.push('/')
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.value);
        this.goHome();
        console.log(this.state.redirect);
    };

    render() {
        // console.log(this.props);
        // const {changeValue} = this.props;
        return(
            <form className="search" onSubmit={this.onFormSubmit}>
                <input type="text" className="search__input"
                       placeholder={this.searchText}
                       value={this.props.value}
                       onChange={this.onInputChange}
                    // onChange={(event) => {
                    //     changeValue(event.target.value)
                    // }}
                />
                <button type="submit" className="search__button"><img src={search} alt="search"/></button>
            </form>
        )

    }
}

// const mapStateToProps = (state) => {
//     return {
//         value: state.value
//     }
// };
//
// const mapDispatchToProps = {
//     changeValue: changeValue,
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Search);
export default withRouter(Search)
