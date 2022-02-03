import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [pictures, setPictures] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPictures(response.data.photos);
  }

  function searchKeyword(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001740e25b7f99c430e8e302733e345f398 ";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  // https://api.dictionaryapi.dev/api/v2/entries/en/<word>

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary shadow-sm">
      <section>
        <p className="mt-2">What word would you like to look up? </p>
        <form onSubmit={searchKeyword}>
          <input
            type="search"
            placeholder=" search for a word"
            onChange={updateKeyword}
          />
        </form>
        <p className="suggestions">
          Suggestions: wine, coffee, moon, sunset, ...
        </p>
      </section>
      <Results results={results} />
      <Photos pictures={pictures} />
    </div>
  );
}
