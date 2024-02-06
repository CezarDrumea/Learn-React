import { useEffect } from 'react';

const Timer = ({ dispatch, seconds }) => {
  const mins = Math.trunc(seconds / 60);
  const secs = seconds % 60;

  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: 'tick' }), 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{secs < 10 && '0'}
      {secs}
    </div>
  );
};
export default Timer;
