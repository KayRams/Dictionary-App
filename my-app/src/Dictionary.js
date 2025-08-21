import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for a ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control"
          placeholder="Search for a word..."
          autoFocus={true}
          onChange={handleKeywordChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="results">{/* Results will be displayed here */}</div>
    </div>
  );
}
