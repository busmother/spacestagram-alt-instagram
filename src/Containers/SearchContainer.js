import React, { Component } from 'react'
import ImageCard from '../Components/ImageCard.js'

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }

    sortByDate = (images, date) => {
        let sortOrder = 1;
        if(images[1] === "-"){
            sortOrder = -1;
            images = images.substr(1);
        }
        return function (a,b) {
            let result = (a[images][date] < b[images][date] ? -1 : (a[images][date] > b[images][date]) ? 1 : 0)
            return result * sortOrder
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
                this.setState({ images: this.sortByDate(allImages) });
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