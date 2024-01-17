import { useState } from 'react';

const FlashCard = ({ question, answer }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => setIsSelected((curState) => !curState);

  return (
    <div className={isSelected ? 'selected' : ''} onClick={handleClick}>
      {isSelected ? answer : question}
    </div>
  );
};
export default FlashCard;
