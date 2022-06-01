import React from "react";
import { createRoot } from "react-dom/client";

import "i18n";
import { ClientConfigContext, ServerConfigContext } from "config";
import { App } from "app";
import { ClientConfig, ServerConfig } from "config";
import API, { APIServerConfig } from "api";


function init() {
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


  const clientConfig: ClientConfig = {
    endpoint: new URL(scriptElement.getAttribute("data-isso")!),
  }
  const api = new API(clientConfig.endpoint);

  //const serverConfig: ServerConfig = api.config().then((response) => {
  api.config()
    .then((response) => {
      const configResponse = (response.data as APIServerConfig).config;
      const serverConfig: ServerConfig = {
        replyToSelf: configResponse["reply-to-self"],
        requireAuthor: configResponse["require-author"],
        requireEmail: configResponse["require-email"],
        replyNotifications: configResponse["reply-notifications"],
        gravatar: configResponse.gravatar,
        avatar: configResponse.avatar,
      }

      const root = createRoot(container);

      root.render(
        <React.StrictMode>
          <ClientConfigContext.Provider value={clientConfig}>
            <ServerConfigContext.Provider value={serverConfig}>
              <App />
            </ServerConfigContext.Provider>
          </ClientConfigContext.Provider>
        </React.StrictMode>
      );
    })
    .catch((error) => {
      console.error("Error fetching server config:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("isso-root");
  if (!rootElement) { // if there's no #isso-root, don't automatically init
    return;
  }

  init();
});

declare global {
  interface Window {
    Isso: {
      init: () => void;
    }
  }
}
window.Isso = {
  init,
}
