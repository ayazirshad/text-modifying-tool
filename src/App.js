import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [darkMode, setdarkMode] = useState("light");
  const [darkLabel, setDarkLabel] = useState("Dark mode");
  const [isDark, setIsDark] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    console.log("darkMode in toggle", darkMode);
    darkLabel === "Dark mode" ? setIsDark(false) : setIsDark(true);
    if (darkMode === "#212121") {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "primary");
      setDarkLabel("Dark mode");
      setIsDark(false);
    } else if (darkMode === "light") {
      setdarkMode("#212121");
      document.body.style.backgroundColor = "#3d3d3d";
      showAlert("Dark mode has been enabled", "primary");
      setDarkLabel("Light mode");
      setIsDark(true);
    }

    if (
      (darkMode === "danger" ||
        darkMode === "success" ||
        darkMode === "primary") &&
      !isDark
    ) {
      setdarkMode("#212121");
      document.body.style.backgroundColor = "#3d3d3d";
      showAlert("Dark mode has been enabled", "primary");
      setDarkLabel("Light mode");
    } else if (
      (darkMode === "danger" ||
        darkMode === "success" ||
        darkMode === "primary") &&
      isDark
    ) {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "primary");
      setDarkLabel("Dark mode");
    }
  };

  const changeMode = (type) => {
    if (type === "danger") {
      setdarkMode("danger");
      document.body.style.backgroundColor = "#8B0000";
    } else if (type === "success") {
      setdarkMode("success");
      document.body.style.backgroundColor = "#023020";
    } else if (type === "primary") {
      setdarkMode("primary");
      document.body.style.backgroundColor = "#00008B";
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        toggleMode={toggleMode}
        darkMode={darkMode}
        changeMode={changeMode}
        darkLabel={darkLabel}
        setIsDark={setIsDark}
      />
      <div className="container my-3">
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                darkMode={darkMode}
              />
            }
          />

          <Route exact path="/about" element={<About darkMode={darkMode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
