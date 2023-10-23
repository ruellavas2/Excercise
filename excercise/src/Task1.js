// Exercise 1
//
// Problem:
//   Changing a value in the form removes the values for the rest of the fields.
//   Correct the current code so that the user is able to update a value in the state,
//   without losing the rest of the existing data.
//
// Solution:
//   the issue here was the onChnage handler being used for each field and than chnaging the specific feild.
// So using the spread operator will chnage only the certain feild that you are editing and keep the existing values too.

import React, { useState } from "react";

export default function Task1() {
  const [person, setPerson] = useState({
    firstName: "Jack",
    lastName: "Sparrow",
    email: "jacksparrow@gmail.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,  //spread operator allows an iterable such as an array here to be expanded in places where 0 or argumnts are expcted
      firstName: e.target.value, 
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person, 
      lastName: e.target.value, 
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person, 
      email: e.target.value, 
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


