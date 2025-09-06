import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    setErrorMessage(null);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryError(error) {
    console.error("Dictionary API error:", error);

    if (error.response && error.response.status === 404) {
      setErrorMessage(
        "Oops! Please check the spelling or look for another word."
      );
    } else {
      setErrorMessage("Oops! Something went wrong. Please try again.");
    }

    setResults(null);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse).catch(handleDictionaryError);

    let pexelsApiKey =
      "jviBu0kjvkgP4XD6sffSEs3HzRyvnxAGcr8SqkP2xRMzzpWLQmJtXo9t";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              placeholder="Search for a word..."
              autoFocus={true}
              onChange={handleKeywordChange}
            />
            <button type="submit">🔍</button>
          </form>
          <div className="hint">
            suggested words: chateau, yacht, champagne, glacier
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
