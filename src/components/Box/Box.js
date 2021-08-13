import React from "react";
import "./box.css";
import { Text } from "../Text/Text.js";

export const Box = ({ text }) => {
  return (
    <div className="box" id="box">
      <Text text={text}></Text>
    </div>
  );
};
