import React, {Component} from 'react';
import './ImageList.scss'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <Link to={`/images/${img.id}`} key={img.id}>
            <img src={img.urls.regular} alt={img.alt_description} className="images__list-img"/>
        </Link>
    });
    return(
        <section className="images">
            <div className="container">
                <div className="images__list">
                    {imgs}
                </div>
            </div>
        </section>
    )
};
ImageList.propTypes = {
    foundImages: PropTypes.array
};
export default ImageList;
