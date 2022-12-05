import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("");
  const styles = { background: color };
  const [colorList, setColorList] = useState([]);
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter the color"
      />
      <button onClick={() => setColorList([...colorList, color])}>
        Add Colors
      </button>
      {colorList.map((colors) => (
        <AddColors colors={colors} />
      ))}
    </div>
  );
}
function AddColors({ colors }) {
  const styles = {
    height: "50px",
    width: "500px",
    backgroundColor: colors,
    margin: "10px"
  };
  return <div style={styles}></div>;
}
