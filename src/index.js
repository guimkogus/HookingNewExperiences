import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Global } from "./config/globalStyles";
//import App from "./pages/App";
import Testing from "./pages/Testing";

ReactDOM.render(
  <React.StrictMode>
    <Global>
      <Testing />
    </Global>
  </React.StrictMode>,
  document.getElementById("root")
);
