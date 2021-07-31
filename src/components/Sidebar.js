import React from "react";
import "../style/sidebar.css"

const websiteElements = ["text", "shapes", "images"];
const list = websiteElements.map((element) => {
   return <li>{element}</li>;
  });
console.log(websiteElements)

export default class Sidebar extends React.Component {
  
  render() {
    return (
      <div className = "sidebar">
        <h1>website elements</h1>
        <ul>{list}</ul>
      </div>
    );
  }
}
