import NextButton from './NextButton';
import Timer from './Timer';

const Footer = ({ showNextButton, showFinishButton, dispatch, seconds }) => {
  return (
    <footer>
      <Timer dispatch={dispatch} seconds={seconds} />
      {showNextButton && (
        <NextButton
          dispatch={dispatch}
          actionType={showFinishButton ? 'finish' : 'nextQuestion'}
        >
          {showFinishButton ? 'Finish' : 'Next'}
        </NextButton>
      )}
    </footer>
  );
};
export default Footer;
