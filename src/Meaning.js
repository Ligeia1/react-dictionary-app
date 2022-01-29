import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              - {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
            <span>
              <Synonyms synonyms={definition.synonyms} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
