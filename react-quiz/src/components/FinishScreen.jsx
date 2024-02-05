const FinishScreen = ({ points, maxPossiblePoints, highscore }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = '🥇';
  else if (percentage >= 80 && percentage < 100) emoji = '🎉';
  else if (percentage >= 50 && percentage < 80) emoji = '🙂';
  else if (percentage > 0 && percentage < 50) emoji = '🤨';
  else if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className='result'>
        {emoji} You scored {points} out of {maxPossiblePoints} (
        {Math.ceil(percentage)}
        %)
      </p>
      <p className='highscore'>(Highsocre: {highscore} points)</p>
    </>
  );
};
export default FinishScreen;
