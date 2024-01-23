import NavBar from './components/NavBar';
import NumResults from './components/NumResults';
import Search from './components/Search';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import Box from './components/Box';
import MoviesList from './components/MoviesList';
import WatchedSummary from './components/WatchedSummary';
import WatchedMoviesList from './components/WatchedMoviesList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/MovieDetails';
import { API_KEY } from './assets/utils';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedID, setSelectedID] = useState(null);
  const [query, setQuery] = useState('');

  const handleSelectMovie = (id) => () =>
    setSelectedID((selectedID) => (id === selectedID ? null : id));

  const handleCloseMovie = () => setSelectedID(null);

  const handleDeleteWatched = (id) => () =>
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setError('');
        setIsLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error('Something wrong with fetching movies');

        const data = await res.json();

        if (data.Response === 'False') throw new Error('Movies not found!');

        setMovies(data.Search);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    handleCloseMovie();
    fetchMovies();

    return () => controller.abort();
  }, [query]);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Box>

        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
              onAddWatched={setWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
