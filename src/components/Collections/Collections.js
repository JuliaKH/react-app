import React, {Component} from 'react'
import './Collections.scss'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Collections extends Component{
    constructor(props){
        super(props);
        this.state = {
            Color: [
                '#00d8ff',
                '#49d091',
                '#e03237',
                '#bcac29',
                '#ff8682',
                '#33a956',
                '#2ca9e1',
                '#a5d8fa',
                '#fdd22d',
            ]
        };
    }
    componentDidMount() {
        this.props.getCollections();
    }

    render() {
        this.collections = this.props.foundCollections.map((collect, index)=> {
            if(this.state.Color[index])
            return <Link to={`/collection/${collect.id}`} key={collect.id} className="collections__link"
                         style={{color: this.state.Color[index]}}><li><span>#</span>{collect.title}</li></Link>
            else return <Link to={`/collection/${collect.id}`} key={collect.id} className="collections__link"
                       style={{color: this.state.Color[index - (index-1)]}}><li><span>#</span>{collect.title}</li></Link>
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
