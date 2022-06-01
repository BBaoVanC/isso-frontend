import React from "react";

import { Postbox } from "template/postbox";


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
