import React, {Component} from 'react';
import './singleMovie.styles.css';

class SingleMovie extends Component {

    render(){
        const {title, overview, poster_path} = this.props.location.state
        console.log(this.props.location.state)
        return(
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <h1>Single Movie</h1>
                <h3>{title}</h3>
                <p>Overview: {overview}</p>
            </div>
        )
    }
}

export default SingleMovie