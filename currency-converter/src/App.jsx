//

import { useEffect, useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('USD');
  const [converted, setConverted] = useState('');

  const handleValueChange = (e) => {
    if (!isNaN(+e.target.value)) setValue(+e.target.value);
    if (e.target.value === '') setValue('');
  };

  const handleFrom = (e) => setFrom(e.target.value);
  const handleTo = (e) => setTo(e.target.value);

  useEffect(() => {
    console.log('MOUNT');

    const controller = new AbortController();

    const getConvertedValue = async () => {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${from}&to=${to}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        setConverted(data.rates[to]);
      } catch (err) {
        console.error(err.name);
      }
    };

    if (!value) return setConverted('');
    if (from === to) return setConverted(value);

    getConvertedValue();

    return () => {
      controller.abort();
      console.log('CLOSE');
    };
  }, [value, to, from]);

  return (
    <div>
      <input type='text' value={value} onChange={handleValueChange} />
      <select value={from} onChange={handleFrom}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <select value={to} onChange={handleTo}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <p>{converted}</p>
    </div>
  );
}
