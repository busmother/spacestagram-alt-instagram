import React, { Component } from 'react'
import ImageCard from '../Components/ImageCard.js'

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }

    fetchImages = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=VodNvDXzlgg3cT0dgOn9JuFzkcQLdDhEhfbwinEI&count=10`)
        .then(response => {
            if(!response.ok) {
                throw Error("Error fetching the space pictures");
            }
            return response.json()
            .then(allImages => {
                this.setState({ images: allImages });
            })
            .catch(err => { 
                throw Error(err.message);
            });
        });
    }

    componentDidMount() {
        this.fetchImages()
    }

    render(){
        return (
            <div className = "grid">
                {this.state.images.map(
                    image => <ImageCard
                    key={image.url}
                    src={image.url}
                    title={image.title}
                    copyright={image.copyright}
                    explanation={image.copyright}
                    date={image.date} 
                    />
                )}
            </div>
        )
    }
}

export default SearchContainer