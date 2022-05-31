import React from "react";
import ReactDOM from "react-dom/client";

import { Postbox } from "template/postbox";
import { Comment } from "template/comment";
import { ClientConfig } from "config";


interface AppProps {
  clientConfig: ClientConfig,
}
export function App(props: AppProps) {
  return (
    <>
      <Postbox clientConfig={props.clientConfig} />
      <Thread clientConfig={props.clientConfig} />
    </>
  );
}

interface ThreadProps {
  clientConfig: ClientConfig,
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
