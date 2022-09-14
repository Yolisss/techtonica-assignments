import "./App.css";
import Quiz from "./components/quiz";

//line 10 is adding quiz to be apart of app component
function App() {
  return (
    <div className="App">
      <Quiz />
      <button>Restart Quiz</button>
    </div>
  );
}

export default App;
