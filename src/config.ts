import { createContext } from "react";


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
  gravatar: boolean,
  avatar: boolean,
}

export const ClientConfigContext = createContext<ClientConfig | undefined>(undefined);
export const ServerConfigContext = createContext<ServerConfig | undefined>(undefined);
