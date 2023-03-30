// Your code here!
import React, { useState } from 'react';
import ReactDom from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div id="container">
      <div id="navbar">Counter.js</div>
      <div id="counter">
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

ReactDom.render(<Counter />, document.getElementById('app'));

//Review 1 Prompt:
// Clicking the Button calls increment function, which adds 1 to the current setCount. Because setCount is the function associated with the count variable, the count reflects the change on every button click
