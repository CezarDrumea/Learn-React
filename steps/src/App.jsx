import { useState } from 'react';
import './index.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const buttonStyle = { backgroundColor: '#7950f2', color: '#fff' };

const App = () => {
  return (
    <>
      <Steps />
      {/* <Steps /> */}
    </>
  );
};

const Steps = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) setStep((curState) => curState - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((curState) => curState + 1);
  };

  const handleClose = () => setIsOpen((curState) => !curState);

  return (
    <div>
      <button className='close' onClick={handleClose}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step === 3 ? 'active' : ''}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className='buttons'>
            <Button btnStyle={buttonStyle} onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button btnStyle={buttonStyle} onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const Button = ({ btnStyle, onClick, children }) => {
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

const Message = ({ step, children }) => {
  return (
    <div className='message'>
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};

export default App;
