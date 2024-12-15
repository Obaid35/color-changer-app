const ColorButton = ({ color, changeColor }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      onClick={() => changeColor(color)}
    >
      {color}
    </button>
  );
};
export default ColorButton;