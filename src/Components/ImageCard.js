import React, { Component } from 'react';

class ImageCard extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        }
    }

    toggleHeart = () => {
        this.setState(state => ({
            liked: !state.liked
        }));
    }
    
    render(){
        return (
            <ul id={this.props.key} className="image-card" >
                <img className="image" key={this.props.key} src={this.props.src} alt="image" />
                <h3 className="caption">
                    <em>{this.props.title}</em> by {this.props.copyright}<br></br>
                    {this.props.explanation}
                </h3>
                <el className="like" onClick={this.toggleHeart}>{this.state.liked ? "💚" : "🖤"}</el>
                <h4 className="date">{this.props.date}</h4>
            </ul>
        )
    }
}

export default ImageCard