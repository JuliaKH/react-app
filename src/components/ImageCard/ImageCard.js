import React, {Component} from 'react';
import './ImageCard.scss'

class ImageCard extends Component {
    constructor(props) {
        super(props);
        // this.state = { spans: 0 };
        // this.imageRef = React.createRef();
        // this.state = {image: {}};
        this.image = {};
    }

    componentDidMount() {
        // this.imageRef.current.addEventListener('load', this.setSpans);
        // this.setState({ image: this.getImage() });
        // console.log(this.image);
    }
    getImage = () => {
        const images = this.props.images;
        let image = images.filter(img =>
            img.id === this.props.match.params.id
        );
        return image[0];
    };
    // setSpans = () => {
    //     const height = this.imageRef.current.clientHeight;
    //     const spansRows = Math.ceil(height / 150 );
    //     this.setState({ spans: spansRows });
    // };)
    render() {
        this.image = this.getImage();
        return (
            <div className="card">
            {/*<div style={{gridRowEnd: `span ${this.state.spans}`}}>*/}
            {/*    <img ref={this.imageRef} src={this.props.image.urls.regular}*/}
            {/*         alt={this.props.image.alt_description} className="images__list-img" />*/}
                <img src={this.image.urls.regular}
                     alt={this.image.alt_description} className="card__image" />
            </div>
        );
    }
}

export default ImageCard;
