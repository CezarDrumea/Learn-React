import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const App = () => {
  return (
    <>
      <Steps />
      <Steps />
    </>
  );
};

const Steps = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  const buttonStyle = { backgroundColor: '#7950f2', color: '#fff' };

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
          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button style={buttonStyle} onClick={handlePrevious}>
              Previous
            </button>
            <button style={buttonStyle} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
