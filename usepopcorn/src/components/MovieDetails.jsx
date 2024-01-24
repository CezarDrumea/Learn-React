import { useEffect, useRef, useState } from 'react';
import StarRating from './StarRating';
import { API_KEY } from '../assets/utils';
import Loader from './Loader';
import { useKey } from '../hooks/useKey';

const MovieDetails = ({ selectedID, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const prevWatchedMovie = watched.find((movie) => movie.imdbID === selectedID);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // Experiment

  const countRef = useRef(0);

  useEffect(() => {
    if (countRef) countRef.current++;
  }, [userRating]);

  // End of Experiment

  const handleAddWatched = () => {
    const newWatchedMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: parseInt(runtime),
      userRating,
      countRef: countRef.current, // Experiment
    };

    if (prevWatchedMovie)
      onAddWatched((watchedMovies) =>
        watchedMovies.map((watchedMovie) =>
          watchedMovie.imdbID === selectedID
            ? { ...prevWatchedMovie, userRating }
            : watchedMovie
        )
      );
    else onAddWatched((watched) => [...watched, newWatchedMovie]);

    onCloseMovie();
  };

  useKey('Escape', onCloseMovie);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedID}`
      );
      const data = await res.json();

      prevWatchedMovie
        ? setUserRating(prevWatchedMovie.userRating)
        : setUserRating(0);

      setMovie(data);
      setIsLoading(false);
    };

    getMovieDetails();
  }, [selectedID, prevWatchedMovie]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => (document.title = 'usePopcorn');
  }, [title]);

  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className='btn-back' onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={title} />
            <div className='details-overview'>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={setUserRating}
                defaultRating={userRating}
              />

              {userRating > 0 && (
                <button className='btn-add' onClick={handleAddWatched}>
                  {prevWatchedMovie ? 'Update rating' : '+ Add to list'}
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
