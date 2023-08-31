import React from "react";
import "../styles/Blogcard.css";
import Pills from "./Pills";
import Cardbutton from "./Cardbutton";

const Blogcard = ({ blog }) => {
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

export default Blogcard;