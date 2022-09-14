//1. passed in prop
//2. updated jsx

function Question({ questionText, correctText, incorrectText }) {
  return (
    <div>
      {questionText}
      <p>
        {correctText} {incorrectText}
      </p>
    </div>
  );
}

export default Question;
