// Exercise 1
//
// Problem:
//   Changing a value in the form removes the values for the rest of the fields.
//   Correct the current code so that the user is able to update a value in the state,
//   without losing the rest of the existing data.
//
// Solution:
//   Explain your solution here.

import React, { useState } from "react";

export default function Task1() {
  const [person, setPerson] = useState({
    firstName: "Jack",
    lastName: "Sparrow",
    email: "jacksparrow@gmail.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person, // Spread the existing state
      firstName: e.target.value, // Update only the firstName field
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person, // Spread the existing state
      lastName: e.target.value, // Update only the lastName field
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person, // Spread the existing state
      email: e.target.value, // Update only the email field
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}


