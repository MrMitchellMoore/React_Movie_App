import React from 'react';
import Movie from './components/movie/Movie';
import MovieContainer from './components/movie/MovieContainer';
import Header from './components/Header';

import './index.css';

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

function App () {
  const [movies, setMovies] = React.useState ([]);
  const [searchTerm, setSearchTerm] = React.useState ('');

  async function getMovies () {
    await fetch (API_URL)
      .then (res => res.json ())
      .then (data => {
        setMovies (data.results);
      })
      .catch (error => console.log (error));
  }

  async function getSearch () {
    if (searchTerm) {
      await fetch (SEARCH_API + searchTerm)
        .then (res => res.json ())
        .then (data => {
          setMovies (data.results);
        })
        .catch (error => console.log (error));
      setSearchTerm ('');
    }
  }

  React.useEffect (() => {
    getMovies ();
  }, []);

  const handleSubmit = e => {
    e.preventDefault ();
    getSearch ();
  };

  const handleOnChange = e => {
    setSearchTerm (e.target.value);
  };

  return (
    <React.Fragment>
      <Header>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </Header>
      <MovieContainer>
        {movies.length > 0 &&
          movies.map (movie => <Movie key={movie.id} {...movie} />)}
      </MovieContainer>
    </React.Fragment>
  );
}

export default App;
