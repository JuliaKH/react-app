import React, {Component} from 'react'
import './Search.scss'
import search from '../../assets/images/search.svg'
import {connect,} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../store/actions";

class Search extends Component {
    constructor(props) {
        super(props)
        this.handleData = this.handleData.bind(this)
    }

    searchText = 'Search images...';
    state = {value: ''};
    onInputChange = (event) => {
        this.setState({value: event.target.value})
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.props.value);
        console.log(this.props.value);
    };

    handleData(event) {

      this.props.takeValue(event.target.value)
    }


    render() {
        // console.log(this.props);
        const {changeValue} = this.props;
        return (
            <form className="search" onSubmit={this.onFormSubmit}>
                <input type="text" className="search__input"
                       placeholder={this.searchText}
                       value={this.state.value}
                       onChange={this.onInputChange}/>
                <button type="submit" className="search__button"><img src={search} alt="search"/></button>
                <input onChange={this.handleData}/>

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
    return {
        changeValue: bindActionCreators(actions.changeValue, dispatch),
        takeValue: (index) => {
            dispatch(actions.takeData(index))
        }
    };
}
    export default connect(putStateToProps, putActionsToProps)(Search);
// export default Search



