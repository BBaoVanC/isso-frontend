import React from "react";
import ReactDOM from "react-dom/client";

import { Comment } from "./template/comment";

export default (root: ReactDOM.Root) => {
  root.render(<Comment content="hello"></Comment>);
}
