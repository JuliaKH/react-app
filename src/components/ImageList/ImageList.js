import React from 'react'
import './ImageList.scss'

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <img key={img.id} src={img.urls.regular} alt={img.alt_description}/>
    });

    return(
        <div>
            <div className="container">
                {imgs}
            </div>

        </div>
    )
};

export default ImageList;
