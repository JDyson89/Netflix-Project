import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './movies.styles.css';
import Search from '../Search/Search.component'

class Movies extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            searchField: '',
            movies2: []
        }
    }

    handleChange = e => {
        //update search field in state

        //search data base using fetch and search field to get new list of movies

        //set the new list of movies to state
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/list/1?api_key=a7e7a64d668afd697218960836d9463f&language=en-US`)
        //https://api.themoviedb.org/4/list/{list_id}?page=1&api_key=<<api_key>>
            .then(data => data.json())
            // .then(response => response)
            .then(data => this.setState({movies: data.items}))
        

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a7e7a64d668afd697218960836d9463f`)
            .then(data => data.json())
            // .then(response => console.log(response))
            .then(data => this.setState({movies2: data.results}))


    }

    render(){
        return(
            <div>
                <Search handleChange={this.handleChange}/>
                <h1>Movies</h1>
                {this.state.movies.map(movie => {
                    return (
                    <div>
                        <p>{movie.title}</p>
                        <Link to={{pathname:`singleMovie/${movie.id}`, state: movie}}><button>View Movie</button></Link>  
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    </div>
                    )
                })}
                <h1>Up Coming Movies</h1>
                {this.state.movies2.map(movies2 => {
                    return (
                        <div>
                            <p>{movies2.title}</p>
                            <Link to={{pathname:`singleMovie/${movies2.id}`, state: movies2}}><button>View Movie</button></Link>
                            <img src={`https://image.tmdb.org/t/p/w500${movies2.poster_path}`} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Movies