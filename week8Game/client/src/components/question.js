import Answer from "./answer.js";

//1. passed in prop
//2. updated jsx
//4. props being passed from parent component quiz
//getting correctText ("string") and incorrecText (arr of string), stored in allAnswers var
//10 display q text
//map method is iterating through each answer (all in p tag which has radio button)
function Question({ questionText, correctText, incorrectText }) {
  const allAnswers = [correctText, ...incorrectText];
  return (
    <div>
      {questionText}
      {allAnswers.map((answer, index) => {
        return (
          <Answer answer={answer} key={index} />
          // <p key={answer}>
          //   <input type="radio" value={answer} />
          //   {answer}
          // </p>
        );
      })}
    </div>
  );
}

export default Question;
