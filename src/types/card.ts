export interface IGetAllCardReq {
  Page: number;
  Size: number;
  Name?: string;
}

export interface IGetAllCardRes {
  pagination: IPagination;
  itens: ICard[];
}

export interface IPagination {
  total: number;
  totalInPage: number;
  page: number;
  pageSize: number;
  totalPages: number
}

export interface ICard {
  id: string;
  name: string;
  status: number;
  photoId: string;
  photo: IPhoto;
  createdAt: string;
  updatedAt: string;
}

export interface IPhoto {
  id: string;
  base64: string;  
  updatedAt: string;
  createdAt: string;
}

export interface ICreateCard {
  name: string;
  base64: string;
}

export interface IUpdateCard {
  id: string;
  name?: string;
  base64?: string;
}