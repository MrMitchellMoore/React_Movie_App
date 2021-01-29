import React from 'react';
import {
  MovieWrapper,
  MovieImg,
  MovieInfo,
  MovieOver,
  MovieInfoH3,
} from './MovieElements';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = vote => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
};

const Movie = ({title, poster_path, overview, vote_average}) => {
  return (
    <MovieWrapper>
      <MovieImg src={IMG_API + poster_path} alt={title} />
      <MovieInfo>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass (vote_average)}`}>
          {vote_average}
        </span>
      </MovieInfo>
      <MovieOver>
        <MovieInfoH3>Overview: </MovieInfoH3>
        <p>{overview}</p>
      </MovieOver>
    </MovieWrapper>
  );
};

export default Movie;
