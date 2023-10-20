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
