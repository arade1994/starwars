import React from "react";
import axios from "axios";

import "./App.css";

function App() {
  axios
    .get("https://swapi.dev/api/people/")
    .then((response) => console.log(response.data));

  return <div className="App"></div>;
}

export default App;
