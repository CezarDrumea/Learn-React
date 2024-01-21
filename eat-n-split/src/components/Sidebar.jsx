import { useState } from 'react';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import FriendList from './FriendList';

const Sidebar = ({ friends, setFriends, clickedFriend, setClickedFriend }) => {
  const [isFriendFormOpen, setIsFriendFormOpen] = useState(false);

  const handleIsFriendFormOpen = () =>
    setIsFriendFormOpen((curState) => !curState);

  return (
    <div className='sidebar'>
      <FriendList
        friends={friends}
        clickedFriend={clickedFriend}
        setClickedFriend={setClickedFriend}
      />
      {isFriendFormOpen && <AddFriendForm setFriends={setFriends} />}
      <Button onClick={handleIsFriendFormOpen}>
        {isFriendFormOpen ? 'Close' : 'Add friend'}
      </Button>
    </div>
  );
};
export default Sidebar;
