import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return (
            <span key={index} className="opacity-75">
              | {synonyms} |
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
