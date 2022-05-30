import React from "react";
import { useTranslation } from "react-i18next";


interface CommentProps {
  id: number,
}
export function Comment(props: CommentProps) {
  const { t } = useTranslation();

  return (
    <div id={`isso-${props.id}`} className="isso-comment">
      <p>{t("postbox-text")}</p>
    </div>
  );
}

interface AvatarProps {
  hash: string,
}
export function Avatar(props: AvatarProps) {
  const { t } = useTranslation();

  return (
    <div className="isso-avatar">

    </div>
  );
}
