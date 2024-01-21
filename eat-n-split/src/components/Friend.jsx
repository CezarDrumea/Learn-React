import Button from './Button';

const Friend = ({
  image,
  name,
  balance,
  id,
  clickedFriend,
  setClickedFriend,
}) => {
  const isThisClicked = id === clickedFriend?.id;

  const handleIsOpen = () =>
    setClickedFriend(!isThisClicked ? { name, id } : null);

  return (
    <li className={isThisClicked && 'selected'}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={balance > 0 ? 'green' : balance < 0 ? 'red' : ''}>
        {balance > 0
          ? `${name} owes you ${balance}€`
          : balance < 0
          ? `You owe ${name} ${-balance}€`
          : `You and ${name} are even`}
      </p>
      <Button onClick={handleIsOpen}>
        {isThisClicked ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default Friend;
