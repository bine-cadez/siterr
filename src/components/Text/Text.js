import React, { useState } from "react";
import styled from "styled-components";

import "./text.css";

const Container = styled.div`
  top: calc(${({ pos }) => pos.y}px - 31vh);
  left: calc(${({ pos }) => pos.x}px - 26vw);
  position: absolute;
  display: block;
  z-index: 50;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const isOverflow = (x, y) => {
  if (
    x < getWindowDimensions().width / 4 ||
    x > (getWindowDimensions().width / 4) * 2.9 ||
    y < getWindowDimensions().height / 3.3 ||
    y > (getWindowDimensions().height / 6) * 4.7
  )
    return true;
  else return false;
};

const textArray = [];

export const Text = ({ text }) => {
  const [x, setX] = useState(getWindowDimensions().width / 3.8);
  const [y, setY] = useState(getWindowDimensions().height / 3.2);

  return (
    <Container
      draggable="true"
      className="textBox"
      pos={{ x, y }}
      onDragEnd={(e) => {
        if (!isOverflow(e.clientX, e.clientY)) {
          setX(e.clientX);
          setY(e.clientY);
        }
      }}
    >
      {text}
    </Container>
  );
};
