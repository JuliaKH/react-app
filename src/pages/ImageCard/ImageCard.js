import React, {Component} from 'react';
import './ImageCard.scss'

class ImageCard extends Component {

    render() {
        return (
            <section className="card">
                <img src={`https://source.unsplash.com/${this.props.match.params.id}`}
                     alt={`https://source.unsplash.com/${this.props.match.params.id}`} className="card__image" />
            </section>
        );
    }
}

export default ImageCard;
