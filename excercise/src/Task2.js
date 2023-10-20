// Exercise 2
//
// Problem:
//   In the following example, clicking on the button should alert the user that the light has been switched on.
//   It's currently broken. Fix it, so that every time the user clicks on the button, they see the alert.
//
// Solution:
//   Explain your solution here.

import React from "react";

export default function App() {
  function handleSwitch() {
    alert("The light is switched on.");
  }
  return <LightSwitch onSwitchLight={handleSwitch} />;
}

function LightSwitch({ onSwitchLight }) {
  return <button onClick={onSwitchLight}>Switch on the light</button>;
}

