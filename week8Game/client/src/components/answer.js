import { useState } from "react";

const Answer = (props) => {
  const [currentClass, setCurrentClass] = useState("blue");

  const onClick = () => {
    setCurrentClass(props.allAnswers === props.allAnswers[0] ? "green" : "red");
  };
  return (
    <p>
      <input className={currentClass} type="radio" />
    </p>
  );
};

export default Answer;
