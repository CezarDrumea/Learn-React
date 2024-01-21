import Friend from './Friend';

const FriendList = ({ friends, clickedFriend, setClickedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          {...friend}
          key={friend.id}
          clickedFriend={clickedFriend}
          setClickedFriend={setClickedFriend}
        />
      ))}
    </ul>
  );
};
export default FriendList;
