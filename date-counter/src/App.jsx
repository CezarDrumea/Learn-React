import { useState } from 'react';

const initStep = 1;
const initCount = 0;

const App = () => {
  const [step, setStep] = useState(initStep);
  const [count, setCount] = useState(initCount);

  const isInitState = step !== initStep || count !== initCount;

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleRange = (e) => setStep(Number(e.target.value));
  const handleCount = (e) => setCount(Number(e.target.value));
  const handleIncrement = () => setCount((curCount) => curCount + step);
  const handleDecrement = () => setCount((curCount) => curCount - step);

  const handleReset = () => {
    setStep(initStep);
    setCount(initCount);
  };

  return (
    <>
      <input
        type='range'
        min={initStep}
        max={10}
        step={1}
        value={step}
        onChange={handleRange}
      />
      <span>{step}</span>
      <br />
      <button onClick={handleDecrement}>-</button>
      <input type='text' value={count} onChange={handleCount} />
      <button onClick={handleIncrement}>+</button>
      <p>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from Today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </p>

      {isInitState && <button onClick={handleReset}>reset</button>}
    </>
  );
};
export default App;
