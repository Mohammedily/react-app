import { useState } from "react";
import Button from '@mui/material/Button';
import { ColorBox } from "./ColorBox.js";

 export function ColorList() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color, color: "black" };
  const INITIAL_COLORS = ["crimson", "orange", "skyblue", "pink"];
  const [colors, setColors] = useState(INITIAL_COLORS);
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color" />
      <Button onClick={() => setColors([...colors, color])} variant="contained">Add color</Button>
      {/* <button ></button> */}
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}

    </div>
  );
}
