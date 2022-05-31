export type ClientConfig = {
  endpoint: URL,

  // https://isso-comments.de/docs/reference/client-config/
  // not implemented:
  /*
  lang: string,
  defaultLang: string,
  maxCommentsTop: number,
  maxCommentsNested: number,
  revealOnClick: number,
  avatar: boolean,
  avatarBackground: string,
  avatarForeground: string[],
  vote: boolean,
  voteLevels: number[],
  feed: boolean,
  pageAuthorHashes: string[],
  replyNotificationsDefaultEnabled: boolean,
  */
}

export type ServerConfig = {
  // not implemented:
  replyToSelf: boolean,
  requireAuthor: boolean,
  requireEmail: boolean,
  replyNotifications: boolean,
}
