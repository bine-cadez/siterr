import React, { useState } from "react";
import styled from "styled-components";

import "./text.css";

const Container = styled.div`
  top: calc(${({ pos }) => pos.y}px);
  left: calc(${({ pos }) => pos.x}px);
  position: absolute;
  display: block;
  z-index: 50;
`;

const textArray = [];

export const Text = ({ text }) => {
  const [isDragging, setIsDraging] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <Container
      draggable="true"
      className="textBox"
      pos={{ x, y }}
      onDrag={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      {text}
    </Container>
  );
};
