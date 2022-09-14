import Question from "./question";
import { useState, useEffect } from "react";

//initially: in question.js, we hard coded "hello" question
//we went back to quiz.js, in the quiz component we created
//variables for one question and answers for it
//we then created questionText prop on line 14 and the other in question.js
//we updated the jsx to use the prop that was passed in
//so now question is shown on page

//data is an obj contains response code and results but we only want results
//that's why we do data.results

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const loadData = () => {
    fetch("http://localhost:8080/api/game")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setQuestions(data.results);
      });
  };

  //it'll let you know when and how many time to upload data
  //[] state of useEffect
  useEffect(() => {
    loadData();
  }, []);
  // const question = "what is your favorite color?";
  // const correctAnswer = "blue";
  // const incorrectAnswers = ["red", "brown"];
  return (
    <>
      {/* //   questionText={questions[0].question}
    //   correctText={questions[0].correct_answer}
    //   incorrectText={questions[0].incorrect_answers}
    // /> */}
      {/* //questions is an array of objects, and each object is a question with incorrect answ, etc
//index is to assign a unique key to each item with an a .map function 
key={} means each element has a unique ID*/}

      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            questionText={question.question}
            correctText={question.correct_answer}
            incorrectText={question.incorrect_answers}
          />
        );
      })}
      {/* // questionText={question}
    // correctText={correctAnswer}
    // incorrectText={incorrectAnswers} */}
    </>
  );
}

export default Quiz;
