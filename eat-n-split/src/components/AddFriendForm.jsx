import { useState } from 'react';
import Button from './Button';

const AddFriendForm = ({ setFriends }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleAddName = (e) => setName(e.target.value);
  const handleAddImage = (e) => setImage(e.target.value);

  const handleAddFriend = (e) => {
    e.preventDefault();
    setFriends((curFriends) => [
      ...curFriends,
      { id: crypto.randomUUID(), name, image, balance: 0 },
    ]);
  };

  return (
    <form className='form-add-friend' onSubmit={handleAddFriend}>
      <label htmlFor='name'>🧑‍🤝‍👩His Name</label>
      <input type='text' id='name' value={name} onChange={handleAddName} />
      <label htmlFor='url'>🖼️Image URL</label>
      <input type='text' id='url' value={image} onChange={handleAddImage} />
      <Button>Add</Button>
    </form>
  );
};
export default AddFriendForm;
