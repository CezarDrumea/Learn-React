import { useState } from 'react';

const initRange = 1;
const initCount = 0;

const App = () => {
  const [range, setRange] = useState(initRange);
  const [count, setCount] = useState(initCount);

  const isInitState = range !== initRange || count !== initCount;

  const date = new Date('18 january 2024');
  date.setDate(date.getDate() + count);

  const handleRange = (e) => setRange(Number(e.target.value));
  const handleCount = (e) => setCount(Number(e.target.value));
  const handleIncrement = () => setCount((curCount) => curCount + range);
  const handleDecrement = () => setCount((curCount) => curCount - range);

  const handleReset = () => {
    setRange(initRange);
    setCount(initCount);
  };

  return (
    <>
      <input
        type='range'
        min={initRange}
        max={10}
        step={1}
        value={range}
        onChange={handleRange}
      />
      <span>{range}</span>
      <br />
      <button onClick={handleDecrement}>-</button>
      <input type='text' value={count} onChange={handleCount} />
      <button onClick={handleIncrement}>+</button>
      <p>{date.toDateString()}</p>

      {isInitState && <button onClick={handleReset}>reset</button>}
    </>
  );
};
export default App;
