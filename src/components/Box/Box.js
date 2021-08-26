import React from "react";
import "./box.css";
import { Text } from "../Text/Text.js";

const allowDrop = (event) => {
  event.preventDefault();
};

export const Box = ({ text, textlist }) => {
  return (
    <div className="box" id="box" onDragOver={(e) => allowDrop(e)}>
      <p className="heading">{text}</p>
      {textlist.map((el, index) => {
        return <Text key={index} text={el}></Text>;
      })}
    </div>
  );
};
