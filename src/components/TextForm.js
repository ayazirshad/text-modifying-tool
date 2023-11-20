import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "danger");
  };
  const copy = () => {
    // navigator.clipboard.writeText(text);
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.darkMode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control mt-3 bg-transparent`}
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="5"
            style={{ color: props.darkMode === "light" ? "black" : "white" }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={upperCase}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to upperCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={lowerCase}
          className="btn btn-secondary mx-1 my-1"
        >
          Convert to lowerCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={clear}
          className="btn btn-danger mx-1 my-1"
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          onClick={copy}
          className="btn btn-primary mx-1 my-1"
        >
          Copy
        </button>
      </div>
      <div
        className=" "
        style={{ color: props.darkMode === "light" ? "black" : "white" }}
      >
        <h1 className="">Your text summary</h1>
        <p className="d-flex  mb-0">
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words {text.length} characters &nbsp;
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes read
          </p>
        </p>
        <div className="border px-1 rounded-md">
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
