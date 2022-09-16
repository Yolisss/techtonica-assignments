import Answer from "./answer.js";

//1. passed in prop
//2. updated jsx
//4. props being passed from parent component quiz
//getting correctText ("string") and incorrecText (arr of string), stored in allAnswers var
//10 display q text
//map method is iterating through each answer (all in p tag which has radio button)
//... spread operator; action is called destructure
//without ... it would be arr within arr
//taking out values from incorrect array and then adding to new array which is allAnswers
// question component is destructuring the props

function Question({ questionText, correctText, incorrectText }) {
  const allAnswers = [correctText, ...incorrectText];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // const animal = () => {};

  return (
    <div>
      {questionText}
      {shuffleArray(allAnswers).map((ans, index) => {
        return (
          <Answer answer={ans} correctAnswer={correctText} key={index} />

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
