//Exercise 4

//he "Greeting" component fetches its initial state from localStorage, 
//keeps localStorage updated when the animal name changes, and employs a lazy initialization
// approach to access localStorage just once during the initial rendering. 
//The custom hook is designed for reuse in other components to achieve similar functionality.

import React from "react";
import useLocalStorage from "./useLocalStorage";

function Task4() {
  const [animal, setAnimal] = useLocalStorage("animal", "");

  function handleAnimalName(event) {
    setAnimal(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor='name'>Animal:</label>
        <input value={animal} onChange={handleAnimalName} id='animal' />
      </form>
      {animal ? (
        <strong>The animal is {animal}</strong>
      ) : (
        "Please type the name of the animal"
      )}
    </div>
  );
}

export default function App() {
  return <Task4 />;
}
