import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n";
import { App } from "./isso";


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("isso-root");
  if (!container) {
    console.error("Could not find the #isso-root element!");
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
