//component will have data from server
import { useState, useEffect } from "react";

//7. this is a component; uses hooks (useState: use data locally)
//useEffect wants to know when to load data

const Cat = () => {
  const [catFact, setCatFact] = useState([]);

  //8-14 will print in console
  const loadData = () => {
    fetch("http://localhost:8080/api/cat")
      .then((response) => response.json())
      .then((data) => {
        console.log("this is line 13", data);
        setCatFact(data);
      });
  };

  //another hook, basically a function to tell the component when to load
  useEffect(() => {
    loadData();
  }, []);

  //retrieving current state's data, specifically facts
  return (
    <div>
      <p>{catFact.fact}</p>
    </div>
  );
};

export default Cat;
