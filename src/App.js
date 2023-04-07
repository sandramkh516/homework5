import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather defaultCity="Isfahan" />
      </div>
      <footer className="mt-5">
        This project was coded by Sara Mokhtari and is{" "}
        <a
          href="https://github.com/sandramkh516/homework5"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a>
      </footer>
    </div>
  );
}
