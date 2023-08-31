import React from "react";
import "../styles/Blogcards.css";
import Pills from "./Pills";
import Cardbutton from "./Cardbutton";

const Blogcards = ({ blog }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{blog.title}</h3>
        <Pills name="React" />
        <p className="card-text">{blog.body}</p>
        <Cardbutton />
      </div>
    </div>
  );
}

export default Blogcards;