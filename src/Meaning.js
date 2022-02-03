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
              <li className="definition"> {definition.definition}</li>
              <em>{definition.example}</em>
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
