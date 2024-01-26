import { useEffect, useState } from 'react';

function useGeolocation(count) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!count) return;

    if (!navigator.geolocation)
      return setError('Your browser does not support geolocation');

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }, [count]);

  return [isLoading, position, error, count];
}

export default function App() {
  const [countClicks, setCountClicks] = useState(0);

  const [isLoading, position, error] = useGeolocation(countClicks);

  const { lat, lng } = position;

  const handleClick = () => setCountClicks((count) => count + 1);

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
