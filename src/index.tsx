import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import $ from "jquery";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Popper from "@popperjs/core";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
