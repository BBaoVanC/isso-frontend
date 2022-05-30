import React from "react";

interface CommentProps {
  content: string,
}
export function Comment(props: CommentProps) {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  );
}
