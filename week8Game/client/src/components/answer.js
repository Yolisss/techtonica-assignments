import { useState } from "react";

//props is an obj with a key of answer inside of it
//passby reference:
const Answer = (props) => {
  const [currentClass, setCurrentClass] = useState("blue");

  const handleOnClick = () => {
    setCurrentClass(props.answer === props.correctAnswer ? "green" : "red");
  };
  return (
    <p>
      <button className={currentClass} onClick={handleOnClick}>
        {props.answer}
      </button>
    </p>
  );
};

export default Answer;
