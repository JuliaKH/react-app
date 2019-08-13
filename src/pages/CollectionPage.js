import React, {Component} from 'react';
import axios from "axios";
import './ImageList/ImageList.scss'

class CollectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {photos: []}
    }

    componentDidMount() {
        this.getChosenCollection();
    }

    componentWillReceiveProps(nextProps){
        this.getChosenCollection();
    }

    getChosenCollection = (id = this.props.match.params.id) => {
        const options = {
            params: {
                per_page: 20
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
                console.log(err);
            });
    };
    render() {
        console.log(this.state);
        const photos = this.state.photos.map((photo) => {
            return <a href="#" key={photo.id}><img src={photo.urls.regular} alt={photo.alt_description} className="images__list-img"/></a>
        });
        return (
            <section className="images">
                <div className="container">
                    <div className="images__list">
                        {photos}
                    </div>
                </div>
            </section>
        );
    }
}

export default CollectionPage;
