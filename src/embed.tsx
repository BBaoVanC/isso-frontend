import React from "react";
import ReactDOM from "react-dom/client";

import "i18n";
import { App } from "app";
import { ClientConfig, ServerConfig, ConfigContext } from "config";
import API, { APIServerConfig } from "api";


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

      const root = ReactDOM.createRoot(container);

      const ConfigContext = React.createContext([clientConfig, serverConfig]);
      root.render(
        <React.StrictMode>
          <ConfigContext.Provider value={[clientConfig, serverConfig]}>
            <App />
          </ConfigContext.Provider>
        </React.StrictMode>
      );
    })
    .catch((error) => {
      console.error("Error fetching server config:", error);
    });


  /*
  const clientConfig: ClientConfig = {
    endpoint,
  };
 */


  //const ClientConfig = React.createContext(config);

  /*
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App clientConfig={config} />
    </React.StrictMode>
  );
 */
});
