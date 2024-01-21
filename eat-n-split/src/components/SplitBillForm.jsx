import { useState } from 'react';
import Button from './Button';

const SplitBillForm = ({ name, id, setFriends }) => {
  const [whoPays, setWhoPays] = useState('you');
  const [billPrice, setBillPrice] = useState('');
  const [yourExpense, setYourExpense] = useState('');

  const handleBillPrice = (e) => setBillPrice(e.target.value);
  const handleYourExpense = (e) => setYourExpense(e.target.value);
  const handleWhoPays = (e) => setWhoPays(e.target.value);

  const handleSplitBill = (e) => {
    e.preventDefault();

    if (billPrice === '' || yourExpense === '') return;

    setFriends((friends) =>
      friends.map((friend) => {
        if (friend.id !== id) return friend;

        const updatedFriendBalance = {
          ...friend,
          balance:
            friend.balance +
            (whoPays === 'you' ? +billPrice - +yourExpense : -yourExpense),
        };

        return updatedFriendBalance;
      })
    );
  };

  return (
    <form className='form-split-bill' onSubmit={handleSplitBill}>
      <h2>Split a bill with {name}</h2>
      <label htmlFor='name'>💰Bill value</label>
      <input
        type='number'
        id='name'
        onChange={handleBillPrice}
        value={billPrice}
      />
      <label htmlFor='you'>🧑Your expense</label>
      <input
        type='number'
        id='you'
        onChange={handleYourExpense}
        value={yourExpense}
      />
      <label htmlFor='friend'>🧑‍🤝‍👩{name}&apos;s expense</label>
      <input
        type='number'
        id='expense'
        disabled
        value={billPrice !== '' ? +billPrice - +yourExpense : ''}
      />
      <label htmlFor='who'>🤑Who is paying the bill?</label>
      <select id='who' onChange={handleWhoPays}>
        <option value='you'>You</option>
        <option value='friend'>{name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};
export default SplitBillForm;
