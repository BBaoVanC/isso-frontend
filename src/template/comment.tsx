import Identicon from "@polkadot/react-identicon";
import React from "react";
import { useTranslation } from "react-i18next";


interface CommentProps {
  id: number,
  name: string | null;
  email: string | null;
  website: string | null;
  hash: string;
}
export function Comment(props: CommentProps) {
  const { t } = useTranslation();

  return (
    <div id={`isso-${props.id}`} className="isso-comment">
      {/*<Avatar hash="b1f2efe4b4cb" />*/}
      <Avatar hash={props.hash} />
      <div className="isso-text-wrapper">
        <div className="isso-comment-header" role="meta">
        </div>
      </div>
    </div>
  );
}


interface AvatarProps {
  hash: string,
}
export function Avatar(props: AvatarProps) {
  const { t } = useTranslation();

  const exampleAvatar = `<svg version="1.1" viewBox="0 0 48 48" preserveAspectRatio="xMinYMin meet" shape-rendering="crispEdges" data-hash="b1f2efe4b4cb"><rect x="0" y="0" width="56" height="56" style="fill: #f0f0f0"></rect><rect x="4" y="20" width="8" height="8" style="fill: #9163b6"></rect><rect x="36" y="20" width="8" height="8" style="fill: #9163b6"></rect><rect x="4" y="36" width="8" height="8" style="fill: #9163b6"></rect><rect x="36" y="36" width="8" height="8" style="fill: #9163b6"></rect><rect x="12" y="4" width="8" height="8" style="fill: #9163b6"></rect><rect x="28" y="4" width="8" height="8" style="fill: #9163b6"></rect><rect x="12" y="20" width="8" height="8" style="fill: #9163b6"></rect><rect x="28" y="20" width="8" height="8" style="fill: #9163b6"></rect><rect x="20" y="4" width="8" height="8" style="fill: #9163b6"></rect><rect x="20" y="12" width="8" height="8" style="fill: #9163b6"></rect><rect x="20" y="36" width="8" height="8" style="fill: #9163b6"></rect></svg>`
  return (
    <div
      className="isso-avatar"
      data-hash={props.hash}
      dangerouslySetInnerHTML={{ __html: exampleAvatar }}
    >
    </div>
  );
}
