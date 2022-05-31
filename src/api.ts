import axios, { AxiosInstance } from "axios";

export default class API {
  service: AxiosInstance;

  constructor(endpoint: URL) {
    this.service = axios.create({
      baseURL: endpoint.toString(),
      //withCredentials: true,
    });
  }

  config() {
    return this.service.get("/config");
  }

  preview(text: string) {
    return this.service.post("/preview", text);
  }
}

export interface APIServerConfig {
  config: {
    "reply-to-self": boolean,
    "require-author": boolean,
    "require-email": boolean,
    "reply-notifications": boolean,
    gravatar: boolean,
    avatar: boolean,
  },
}
