import Question from "./question";

//initially: in question.js, we hard coded "hello" question
//we went back to quiz.js, in the quiz component we created
//variables for one question and answers for it
//we then created questionText prop on line 12 and the other in question.js
//we updated the jsx to use the prop that was passed in
//so now question is shown on page

function Quiz() {
  const question = "what is your favorite color?";
  const correctAnswer = "blue";
  const incorrectAnswers = ["red", "brown"];
  return <Question questionText={question}></Question>;
}

export default Quiz;
