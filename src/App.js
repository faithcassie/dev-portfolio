import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
