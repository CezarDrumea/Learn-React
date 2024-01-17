import FlashCard from './FlashCard';

const FlashCards = ({ questions }) => {
  return (
    <div className='flashcards'>
      {questions.map((flashCard) => (
        <FlashCard {...flashCard} key={flashCard.id} />
      ))}
    </div>
  );
};
export default FlashCards;
