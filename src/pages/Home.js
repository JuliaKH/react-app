import React, {Component} from 'react';
import './ImageList/ImageList.scss'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Home extends Component {

    componentDidMount() {
        this.props.userSubmit('popular');
    }

    render() {
        this.imgs = this.props.foundImages.map(img => {
            return <Link to={`/images/${img.id}`} key={img.id}> <img  src={img.urls.regular} alt={img.alt_description} className="images__list-img"/></Link>
        });
        return (
            <section className="images">
                <div className="container">
                    <div className="images__list">
                        {this.imgs}
                    </div>
                </div>
            </section>
        );
    }
}

Home.propTypes = {
    foundImages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        urls: PropTypes.shape({
            regular: PropTypes.string
        }),
        alt_description: PropTypes.string
    })).isRequired,
    userSubmit:PropTypes.func.isRequired
};
export default Home;
