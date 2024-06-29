import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ name: "", age: 100 });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    setPerson({ ...person, name: newFirstName + " " + lastName });
  }

  function handleLastNameChange(e) {
    const newLastName = e.target.value;
    setLastName(newLastName);
    setPerson({ ...person, name: firstName + " " + newLastName });
  }

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  console.log("during render: ", person);

  return (
    <>
      <label>
        First Name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
