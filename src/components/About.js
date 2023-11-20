import React from "react";
// import { useState } from 'react'

export default function About(props) {
  return (
    <div
      className={`container bg-${props.darkMode}`}
      style={{ color: props.darkMode === "light" ? "black" : "white" }}
    >
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div
          className={`accordion-item bg-${props.darkMode}`}
          style={{ color: props.darkMode === "light" ? "black" : "white" }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button bg-${props.darkMode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ color: props.darkMode === "light" ? "black" : "white" }}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body bg-${props.darkMode}`}>
              TextUtils gives you a way to analyzr your text quickly and
              efficiently. It does word courd count, convert to upperCase and
              lowerCase.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item bg-${props.darkMode}`}
          style={{ color: props.darkMode === "light" ? "black" : "white" }}
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed bg-${props.darkMode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ color: props.darkMode === "light" ? "black" : "white" }}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body bg-${props.darkMode}`}>
              TextUtils is a free character counter tool that provides instant
              character cout & word count statistics for a given text. TextUtils
              reports the number of words and characters. Thus it is suitable
              for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item bg-${props.darkMode}`}
          style={{ color: props.darkMode === "light" ? "black" : "white" }}
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button collapsed bg-${props.darkMode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ color: props.darkMode === "light" ? "black" : "white" }}
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body bg-${props.darkMode}`}>
              This word counter software works in any web browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count character in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
