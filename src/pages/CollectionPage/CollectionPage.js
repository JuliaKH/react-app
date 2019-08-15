import React, {Component} from 'react';
import axios from "axios";
import '../ImageList/ImageList.scss'
import {Link} from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";

class CollectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {photos: []}
    }

    componentDidMount() {
        this.getChosenCollection(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps){
        this.getChosenCollection(nextProps.match.params.id);
    }

    getChosenCollection = (id) => {
        const options = {
            params: {
                per_page: 30
            },
            headers: {
                Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            }
        };
        axios
            .get(`https://api.unsplash.com/collections/${id}/photos`, options)
            .then(res => {
                this.setState({photos: res.data});
            })
            .catch(err => {
            });
    };
    render() {
        const photos = this.state.photos.map((photo) => {
            return <Link to={`/images/${photo.id}`} key={photo.id}><img src={photo.urls.regular} alt={photo.alt_description} className="images__list-img"/></Link>
        });
        return (
            <section className="images">
                <div className="container">
                    <h2 className="images__title">{this.props.match.params.title}</h2>
                    <div className="images__list">
                        {photos}
                    </div>
                </div>
            </section>
        );
    }
}
CollectionPage.defaultProps = {
    match: { params: { code: 123 } }
};
export default CollectionPage;
