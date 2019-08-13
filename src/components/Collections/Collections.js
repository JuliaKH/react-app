import React, {Component} from 'react'
import './Collections.scss'
import axios from "axios";

class Collections extends Component{
    componentDidMount() {
        this.props.getCollections();
    }
    render() {
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default Collections;
