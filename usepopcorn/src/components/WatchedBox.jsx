import { useState } from 'react';
import WatchedSummary from './WatchedSummary';
import WatchedMoviesList from './WatchedMoviesList';

const WatchedBox = ({ watchedData }) => {
  const [watched, setWatched] = useState(watchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
};
export default WatchedBox;
