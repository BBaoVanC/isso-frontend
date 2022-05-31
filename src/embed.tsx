import React from "react";
import ReactDOM from "react-dom/client";

import "i18n";
import { App } from "isso";
import { ClientConfig } from "config";
import "api";


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("isso-root");
  if (!container) {
    console.error("Could not find the #isso-root element!");
    return;
  }

  const scriptElement = document.querySelector("script[data-isso]");
  if (!scriptElement) {
    console.error("Could not find the Isso <script> tag -- make sure you have set `data-isso`!");
    return;
  }

  const endpoint: URL = new URL(scriptElement.getAttribute("data-isso")!);
  const config: ClientConfig = {
    endpoint,
  };

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App clientConfig={config} />
    </React.StrictMode>
  );
});
