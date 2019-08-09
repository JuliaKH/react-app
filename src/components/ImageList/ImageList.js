import React from 'react'
import './ImageList.scss'
import ImageCard from '../ImageCard/ImageCard'

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        // return <img key={img.id} src={img.urls.regular} alt={img.alt_description} className="images__list-img"/>
        return <ImageCard key={img.id} image={img}  />
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

export default ImageList;
