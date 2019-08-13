import React, {Component} from 'react'
import './Collections.scss'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Collections extends Component{
    componentDidMount() {
        this.props.getCollections();
    }
    render() {
        this.collections = this.props.foundCollections.map((collect)=> {
            return <Link to={`/collection/${collect.id}`} key={collect.id} className="collections__link"><li><span>#</span>{collect.title}</li></Link>
        });
        return(
            <div className="collections">
                <div className="collections__container">
                    <ul className="collections__list">
                        {this.collections}
                    </ul>
                </div>
            </div>
        )
    }
}
Collections.propTypes = {
    foundCollections: PropTypes.array,
    getCollections: PropTypes.func
};
export default Collections;
