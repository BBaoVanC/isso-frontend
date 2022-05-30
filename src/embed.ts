import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n";
import app from "./app";


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("isso-thread");
  if (!container) {
    console.error("Could not find the #isso-thread element!");
    return;
  }

  const root = ReactDOM.createRoot(container);
  app(root);
});
