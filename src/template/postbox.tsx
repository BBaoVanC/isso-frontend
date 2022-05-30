import React from "react";
import { useTranslation } from "react-i18next";


interface PostboxProps {
}
export function Postbox(props: PostboxProps) {
  const { t } = useTranslation();

  return (
    <div className="isso-postbox">
      <PostboxTextArea />
    </div>
  );
}

export function PostboxTextArea(props: {}) {
  const { t } = useTranslation();

  return (
    <div className="isso-textarea-wrapper">
      <textarea
        className="isso-textarea"
        rows={5}
        minLength={3}
        maxLength={65535}
        placeholder={t("postbox-text")}
      />
      {/*<div className="isso-preview" />*/}
    </div>
  );
}
