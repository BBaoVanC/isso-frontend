import React from "react";
import { useTranslation } from "react-i18next";

interface CommentProps {
  content: string,
}
export function Comment(props: CommentProps) {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p>{props.content}</p>
      <p>{t("postbox-text")}</p>
    </div>
  );
}
