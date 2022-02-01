import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li> {definition.definition}</li>
              <br />
              example: <em>{definition.example}</em>
            </ul>
            <span>
              <Synonyms synonyms={definition.synonyms} />
              <br />
            </span>
          </div>
        );
      })}
    </div>
  );
}
