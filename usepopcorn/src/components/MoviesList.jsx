import Movie from './Movie';

const MoviesList = ({ movies, onSelectMovie }) => {
  return (
    <ul className='list list-movies'>
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} {...movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};
export default MoviesList;
