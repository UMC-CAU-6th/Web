import { useState } from 'react';
import Card from "./Card";
import "./Search.css";

function Search() {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [data, setData] = useState(null);

    const sendSearchRequest = (event) => {
        event.preventDefault();

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: process.env.REACT_APP_MOVIE_API_KEY
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));
    }

    return (
        <>
            <form id="search-form" onSubmit={sendSearchRequest}>
            <input id="search-input" value={searchKeyword} onChange={(event) => (setSearchKeyword(event.target.value))}></input>
            <button id="search-btn" disabled={!searchKeyword}>FIND</button>
            </form>
            
            {(data) ? 
            <div id="search-result-wrapper">
            {data.map((element, index) => <Card key={index} movie={element}/>)}
            </div>   
            :
            ""
            }
                
        </>
    )
}

export default Search;