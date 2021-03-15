import React from 'react';
import './search.styles.css';

const Search = (props) => {
    return (
        <div className='searchContainer'>
            <input className='search' type='search' placeholder='Search' onChange={props.handleChange}/>
        </div>
    )
}

export default Search