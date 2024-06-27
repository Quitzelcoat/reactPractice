import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Backcolor() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCount, setCangecount] = useState(0);

  const onButtonClick = (color) => () => {
    if (color !== backgroundColor) {
      setBackgroundColor(color);
      setCangecount(changeCount + 1);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <div>Count: {changeCount}</div>
    </div>
  );
}

export default Backcolor;
