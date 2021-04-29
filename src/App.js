import './App.css';
import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("");

  const changeMode = () => {
    mode === "info" ? setMode("") : setMode("info");
  }

  return (
    <div className="app">
      <h1>Dyscalculator</h1>
      <p className="PHover" onClick = {() => changeMode()}>What is Dyscalculia?</p>
      {mode === "info" && (
        <p onClick = {()=> changeMode()}>Dyscalculia is a math learning disability that impairs an individual's ability to learn number-related concepts and perform accurate math calculations.</p>
      )}
      <Form />
    </div>
  );
}

export default App;
