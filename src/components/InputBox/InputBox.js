import React, { useState } from "react";
import { Box } from "../Box/Box.js";
import "./inputbox.css";

export const InputBox = ({ isHidden }) => {
  const [textList, setTextList] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getValue = () => {
    return value;
  };

  const handleSubmit = () => {
    const newElement = getValue();
    const newTextList = [...textList, newElement];
    setTextList(newTextList);
    console.log(textList);
  };

  return (
    <div className="inputBox">
      <Box text={value} textlist={textList}></Box>
      {!isHidden && <textarea value={value} onChange={handleChange} />}
      {!isHidden && <button onClick={handleSubmit}>submit</button>}
    </div>
  );
};
