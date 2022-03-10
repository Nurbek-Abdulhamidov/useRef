import React, { useState } from "react";

function randomNumber() {
  return Math.trunc(Math.random() * 200);
}

function App() {

  const [number, setNumber] = useState(() => {
    return randomNumber();
  });

  const [state, setState] = useState({
    text: "Number",
    date: Date.now(),
  });

  function incerement() {
    // setNumber((prev) => {
    //   return prev + 1;
    // });
    setNumber(number + 1);
  }

  function decerement() {
    setNumber(number - 1);
  }

  function upLoadObject() {
    setState((prev) => {
      console.log(prev);
      return {
        ...prev,
        text: "New text",
      };
    });
  }

  return (
    <div className="container">
      <div className="btn-group">
        <p>Number:{number}</p>
        <button onClick={incerement} className="success">
          Create
        </button>
        <button onClick={decerement} className="danger">
          Delate
        </button>
        <button className="secondary" onClick={upLoadObject}>
          Change
        </button>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
