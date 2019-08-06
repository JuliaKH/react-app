import React from 'react'
import './ImageList.scss'

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <img key={img.id} src={img.urls.regular} alt={img.alt_description}/>
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

