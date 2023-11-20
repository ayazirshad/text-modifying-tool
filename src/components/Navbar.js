import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="#"
          style={{ color: props.darkMode === "light" ? "black" : "white" }}
        >
          <h2>{props.title}</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                style={{
                  color: props.darkMode === "light" ? "black" : "white",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  color: props.darkMode === "light" ? "black" : "white",
                }}
              >
                About us
              </Link>
            </li>
          </ul>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.changeMode("danger")}
            >
              Red
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => props.changeMode("success")}
            >
              Green
            </button>
            <button
              type="button"
              className="btn btn-primary "
              onClick={() => props.changeMode("primary")}
            >
              Blue
            </button>
          </div>
          <form className="d-flex" role="search">
            <input
              className={`form-control me-2 mx-2 bg-transparent`}
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ color: props.darkMode === "light" ? "black" : "white" }}
            />
            <button className="btn btn-secondary " type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input "
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />

            <label
              className="form-check-label"
              style={{
                color: props.darkMode === "light" ? "black" : "white",
              }}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.darkLabel}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
