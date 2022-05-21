import { IMe } from "../IMe";

export interface IFeed {
  data: {
    data: IFullFeed[];
  };

  meta?: IMeta;
}

export interface IFullFeed {
  id: number;

  attributes: {
    createdAt: string;
    updatedAt: string;
    text: string;
    likes: number;
    media: {
      data: null;
    };
    user: {
      data: {
        id: number;
        attributes: IMe;
      };
    };
    comments: {
      data: [];
    };
  };
}

export interface ITweet {
  id: number;
}

export interface IMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
