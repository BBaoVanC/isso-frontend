import axios from "axios";

export default class API {
  endpoint: URL;

  constructor(endpoint: URL) {
    this.endpoint = endpoint;
  }

  preview(text: string) {
    return axios.post("/preview", text);
  }
}
