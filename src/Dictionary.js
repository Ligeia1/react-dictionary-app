import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0].meanings);
    setResults(response.data[0]);
  }

  function searchKeyword(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  // https://api.dictionaryapi.dev/api/v2/entries/en/<word>

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchKeyword}>
        <input
          type="search"
          placeholder="search for a word"
          onChange={updateKeyword}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
