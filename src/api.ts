import axios from "axios";

export function preview(text: string) {
  return axios.post("/preview", text);
}
