import NavBar from './components/NavBar';
import NumResults from './components/NumResults';
import Search from './components/Search';
import Main from './components/Main';
import { useCallback, useState } from 'react';
import Box from './components/Box';
import MoviesList from './components/MoviesList';
import WatchedSummary from './components/WatchedSummary';
import WatchedMoviesList from './components/WatchedMoviesList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/MovieDetails';
import { useMovies } from './hooks/useMovies';
import { useLocalStorageState } from './hooks/useLocalStorageState';

export default function App() {
  const [selectedID, setSelectedID] = useState(null);
  const [query, setQuery] = useState('');

  const handleSelectMovie = (id) => () =>
    setSelectedID((selectedID) => (id === selectedID ? null : id));

  const handleCloseMovie = useCallback(() => setSelectedID(null), []);

  const handleDeleteWatched = (id) => (e) => {
    e.stopPropagation();
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  const [watched, setWatched] = useLocalStorageState([], 'watched');
  const [movies, isLoading, error] = useMovies(query, handleCloseMovie);

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
                onSelectMovie={handleSelectMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
