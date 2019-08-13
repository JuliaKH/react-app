import React, {Component} from 'react';
import './ImageCard.scss'

class ImageCard extends Component {
    constructor(props) {
        super(props);
        // this.state = { spans: 0 };
        // this.imageRef = React.createRef();
    }

    componentDidMount() {
        // this.imageRef.current.addEventListener('load', this.setSpans);
    }
    // setSpans = () => {
    //     const height = this.imageRef.current.clientHeight;
    //     const spansRows = Math.ceil(height / 150 );
    //     this.setState({ spans: spansRows });
    // };)
    render() {
        return (
            <div className="card">
            {/*<div style={{gridRowEnd: `span ${this.state.spans}`}}>*/}
            {/*    <img ref={this.imageRef} src={this.props.image.urls.regular}*/}
            {/*         alt={this.props.image.alt_description} className="images__list-img" />*/}
                <img src={`https://source.unsplash.com/${this.props.match.params.id}`}
                     alt={`https://source.unsplash.com/${this.props.match.params.id}`} className="card__image" />
            </div>
        );
    }
}

export default ImageCard;
