import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="phonetics-text">/{props.phonetics.text}/ </span>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <i className="fas fa-headphones"></i>
      </a>
    </div>
  );
}
