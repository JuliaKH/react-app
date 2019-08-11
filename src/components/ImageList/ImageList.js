import React, {Component} from 'react';
import './ImageList.scss'
import ImageCard from '../ImageCard/ImageCard'
import {Link} from "react-router-dom";
import {Switch, Route} from "react-router-dom";

class ImageList extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount() {
        this.props.userSubmit('popular');
    }

    render() {
        this.imgs = this.props.foundImages.map(img => {
            return <Link to={img.id} key={img.id}> <img  src={img.urls.regular} alt={img.alt_description} className="images__list-img"/></Link>
            // return <Link to={img.id} key={img.id}> <ImageCard image={img} /></Link>
        });
        console.log(this.imgs);
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

export default ImageList;
// const ImageList = (props) => {
//     const imgs = props.foundImages.map(img => {
//         return <Link to={img.id} key={img.id}> <img  src={img.urls.regular} alt={img.alt_description} className="images__list-img"/></Link>
//         // return <Link to={img.id} key={img.id}> <ImageCard image={img} /></Link>
//     });
//     return(
//         <section className="images">
//             <div className="container">
//                 <div className="images__list">
//                     {imgs}
//                 </div>
//             </div>
//         </section>
//     )
// };
//
// export default ImageList;
