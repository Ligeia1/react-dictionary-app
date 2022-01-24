import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function searchKeyword(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

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
    </div>
  );
}
