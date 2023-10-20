// Exercise 3
//
// Problem:
//   We have a code snippet for a basic program which contains a counter, 
//   a list of items, which represents the current count and the current count increased by 1 and 2,
//   and we also have a theme switch, which toggles the background color.
//   Currently, in the List component we're printing out a string everytime something is being updated.
//   The goal of this task is to print out the string ONLY when the list of items is being updated.
//
// Solution:
//   the issue was that the console.log was above the useEffect function in the List component. 
//this ensures that the log message is being printed only when the items state is upated
//as useEffect runs when [getItems] chnages

import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };

  const getItems = () => {
    return [count, count + 1, count + 2];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Updating items");
    setItems(getItems());
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
