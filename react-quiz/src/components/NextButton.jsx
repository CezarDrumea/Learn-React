const NextButton = ({ dispatch, actionType, children }) => {
  return (
    <button
      className='btn btn-ui'
      onClick={() => dispatch({ type: actionType })}
    >
      {children}
    </button>
  );
};
export default NextButton;
