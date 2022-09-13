import logo from "./logo.svg";
import "./App.css";
import Quiz from "./components/quiz";

//line 10 is adding quiz to be apart of app component
function App() {
  return (
    <div className="App">
      <Quiz></Quiz>
    </div>
  );
}

export default App;
