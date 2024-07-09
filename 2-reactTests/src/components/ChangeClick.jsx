import { useState } from "react";

const ChangeOnClick = () => {
  const [heading, setHeading] = useState("Magnficent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>

      <h1>{heading}</h1>
    </>
  );
};

export default ChangeOnClick;
