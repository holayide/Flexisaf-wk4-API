import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  async function getQuote() {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const data = await resp.json();
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="app">
      <h1>Random Advice Generator</h1>
      <div className="box">
        <h3>&quot; {advice} &quot;</h3>

        <div>
          <button onClick={getQuote} className="btn">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
