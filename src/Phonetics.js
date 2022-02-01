import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  const audio = new Audio(props.phonetics.audio);
  function playSound() {
    audio.play();
  }

  return (
    <div className="Phonetics">
      <span className="phonetics-text">/{props.phonetics.text}/ </span>
      <i className="fas fa-headphones" onClick={playSound}></i>
    </div>
  );
}
