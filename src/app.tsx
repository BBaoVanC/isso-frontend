import React from "react";
import ReactDOM from "react-dom/client";

import { Postbox } from "template/postbox";
import { Comment } from "template/comment";


interface AppProps {
}
export function App(props: AppProps) {
  return (
    <>
      <Postbox />
      <Thread />
    </>
  );
}

interface ThreadProps {
}
export function Thread(props: ThreadProps) {
  return (
    <div id="isso-thread">
      {/*
      <Comment
        id={1}
        name="someone"
        email="example@example.com"
        website="https://example.com"
        hash="lasdfhkj"
      />
      */}
    </div>
  );
}
