function Button({ text, color, fontSize, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button
      onClick={() => handleClick("https://www.theodinproject.com")}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 12,
};

export default function PropsExm() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
      <Button handleClick={handleButtonClick} />
    </div>
  );
}
