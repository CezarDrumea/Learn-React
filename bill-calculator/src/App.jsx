import { useState } from 'react';

const App = () => {
  const [price, setPrice] = useState(0);
  const [tips1, setTips1] = useState(0);
  const [tips2, setTips2] = useState(0);

  const avgTip = Math.round(((tips1 + tips2) / 200) * price);
  const totalPrice = price + avgTip;

  const handleReset = () => {
    setPrice(0);
    setTips1(0);
    setTips2(0);
  };

  return (
    <>
      <Price price={price} onSetPrice={setPrice}>
        How much was the bill?
      </Price>
      <Tip tips={tips1} onSetTips={setTips1}>
        How did you like the service?
      </Tip>
      <Tip tips={tips2} onSetTips={setTips2}>
        How did your friend like the service?
      </Tip>
      <h2>
        You pay {totalPrice} (${price} + ${avgTip} tip)
      </h2>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

const Price = ({ children, onSetPrice, price }) => {
  return (
    <>
      <p>{children}</p>
      <input
        type='text'
        value={price}
        onChange={(e) =>
          onSetPrice(
            !isNaN(Number(e.target.value)) ? Number(e.target.value) : price
          )
        }
      />
    </>
  );
};

const Tip = ({ children, onSetTips, tips }) => {
  return (
    <>
      <p>{children}</p>
      <select value={tips} onChange={(e) => onSetTips(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </>
  );
};

export default App;
