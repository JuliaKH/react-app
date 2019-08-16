import React, {Component} from 'react';
import './ImageCard.scss'
import axios from "axios";

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.state = {image: {
            urls: {}
            }}
    }

    componentDidMount() {
        this.getImageById(this.props.match.params.id);
    }

    getImageById = (id) => {
        const options = {
            params: {
            },
            headers: {
                Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            }
        };
        axios
            .get(`https://api.unsplash.com/photos/${id}`, options)
            .then(res => {
                this.setState({image: res.data});
            })
            .catch(err => {
            });
    };
    render() {
        console.log(this.state.image.urls);
        return (
            <section className="card">
                <img src={this.state.image.urls.regular}  alt={this.state.image.alt_description} className="card__image" />
            </section>
        );
    }
}
ImageCard.defaultProps = {
    match: { params: { code: 123 } },
};
export default ImageCard;
