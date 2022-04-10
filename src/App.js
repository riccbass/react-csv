// https://www.youtube.com/watch?v=D9xiIZAPZUI
// https://www.youtube.com/watch?v=o4JOysBWeos
// https://stackoverflow.com/questions/53504924/reactjs-download-csv-file-on-button-click

import React, { useState, useEffect, useRef } from "react";
import AsyncData from "./components/AsyncData";

import FixedData from "./components/FixedData";

const App = () => {
  return (
    <div className="App" style={{ margin: "20px" }}>
      <FixedData />
      <br></br>
      <AsyncData />
    </div>
  );
};

export default App;
