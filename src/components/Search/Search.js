import React, { Component } from 'react'
import './Search.scss'
import search from '../../assets/images/search.svg'
import {bindActionCreators} from "redux";
import {changeValue} from "../../store/actions";
import {connect} from "react-redux";

class Search extends Component{

    searchText = 'Search images...';
    // state = { value: '' };
    // onInputChange = (event) => {
    //     this.setState({ value: event.target.value })
    // };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.props.value);
        console.log(this.props.value);
    };
    render() {
        // console.log(this.props);
        const {changeValue} = this.props;
        return(
            <form className="search" onSubmit={this.onFormSubmit}>
                    <input type="text" className="search__input"
                           placeholder={this.searchText}
                           value={this.props.value}
                           // onChange={this.onInputChange}
                           onChange={(event) => {
                               changeValue(event.target.value)
                           }}
                    />
                    <button type="submit" className="search__button"><img src={search} alt="search"/></button>
            </form>
        )
        
    }
}

const putStateToProps = (state) => {
    return {
        value: state.value
    }
};
const putActionsToProps = (dispatch) => {
    return{
        changeValue: bindActionCreators(changeValue, dispatch)
    }
};
export default connect(putStateToProps, putActionsToProps)(Search);
// export default Search
