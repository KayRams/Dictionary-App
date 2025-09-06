import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <section className="border-bottom">
          {props.results.phonetics
            .filter((phonetics) => phonetics.audio)
            .map(function (phonetic, index) {
              return (
                <div key={index}>
                  <em>{phonetic.text}</em>
                  <br />
                  <audio controls src={phonetic.audio}></audio>
                </div>
              );
            })}
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
