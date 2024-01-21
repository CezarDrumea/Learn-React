import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SplitBillForm from './components/SplitBillForm';

const initialFriends = [
  // {
  //   id: 118836,
  //   name: 'Clark',
  //   image: 'https://i.pravatar.cc/48?u=118836',
  //   balance: -7,
  // },
  // {
  //   id: 933372,
  //   name: 'Sarah',
  //   image: 'https://i.pravatar.cc/48?u=933372',
  //   balance: 20,
  // },
  // {
  //   id: 499476,
  //   name: 'Anthony',
  //   image: 'https://i.pravatar.cc/48?u=499476',
  //   balance: 0,
  // },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [clickedFriend, setClickedFriend] = useState(null);

  return (
    <div className='app'>
      <Sidebar
        friends={friends}
        setFriends={setFriends}
        clickedFriend={clickedFriend}
        setClickedFriend={setClickedFriend}
      />
      {clickedFriend && (
        <SplitBillForm {...clickedFriend} setFriends={setFriends} />
      )}
    </div>
  );
};

export default App;
