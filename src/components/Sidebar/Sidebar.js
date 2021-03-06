import React, { useState } from "react";
import "./sidebar.css";
import { InputBox } from "../InputBox/InputBox.js";
import "../InputBox/inputbox.css";

const websiteElements = ["text", "shapes", "images"];
export const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const onClick = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <h1>website elements</h1>
      <ul>
        {websiteElements.map((element) => {
          return (
            <li key={element}>
              <button onClick={onClick}>{element}</button>
            </li>
          );
        })}
      </ul>
      <InputBox isHidden={isHidden}></InputBox>
    </div>
  );
};
