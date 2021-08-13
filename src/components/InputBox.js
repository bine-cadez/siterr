import React, { useState } from "react";
import { Box } from "./Box/Box.js";
import "../style/inputbox.css";

export const InputBox = ({ isHidden }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="inputBox">
      <Box text={value}></Box>
      {!isHidden && <textarea value={value} onChange={handleChange} />}
    </div>
  );
};
