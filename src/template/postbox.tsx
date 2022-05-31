import React, { useState } from "react";
import { useTranslation } from "react-i18next";


interface PostboxProps {
}
export function Postbox(props: PostboxProps) {
  const { t } = useTranslation();

  const [isPreview, setIsPreview] = useState(false);
  const togglePreview = () => {
    setIsPreview(!isPreview);
  }

  return (
    <div className="isso-postbox">
      {isPreview
        ? < ></>
        : <PostboxTextarea />
      }
      <div className="isso-postbox-bottom">
        <div className="isso-author-inputs">
          <div className="isso-input-wrapper">
            <input
              id="isso-postbox-author"
              type="text"
              name="author"
              placeholder={t("postbox-author-placeholder")}
            />
            <label htmlFor="isso-postbox-author">{t("postbox-author")}</label>
          </div>

          <div className="isso-input-wrapper">
            <input
              id="isso-postbox-email"
              type="email"
              name="email"
              placeholder={t("postbox-email-placeholder")}
            />
            <label htmlFor="isso-postbox-email">{t("postbox-email")}</label>
          </div>

          <div className="isso-input-wrapper">
            <input
              id="isso-postbox-website"
              type="text"
              name="website"
              placeholder={t("postbox-website-placeholder")}
            />
            <label htmlFor="isso-postbox-website">{t("postbox-website")}</label>
          </div>
        </div>

        <div className="isso-postbox-buttons">
          <div className="isso-postbox-action">
            {isPreview
              ? <input
                  onClick={togglePreview}
                  type="button"
                  name="edit"
                  value={t("postbox-edit")}
                />
              : <input
                  onClick={togglePreview}
                  type="button"
                  name="preview"
                  value={t("postbox-preview")}
                />
            }
            <input type="submit" name="submit" value={t("postbox-submit")}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PostboxTextarea(props: {}) {
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
