export interface IMe {
  birthday: string;

  blocked: boolean;

  confirmed: boolean;

  createdAt: string;

  email: string;

  id: number;

  locked: boolean;

  provider: string;

  tel: string;

  updatedAt: string;

  username: string;

  image: {
    id: number;

    url: string;
  };
}

export interface IMeQuery {
  data: IMe;
}
