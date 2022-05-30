import React from "react";
//import ReactDOM from "react-dom/client";
import { ReactDOM } from "react";

export default (root: ReactDOM.root) => {
    root.render(<Comment content="hello world!"></Comment>);
}
