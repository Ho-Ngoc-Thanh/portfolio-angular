export interface DialogData {
  title: string;
  getApi: () => void;
}
export interface DialogDataDelete {
  id: number;
  getApi: () => void;
}
export interface ITablePost {
  id: number;
  title: string;
  position?: number;
  author: string;
  description?: string;
}

export interface GetDataPosts {
  keyword?: string;
  page: number;
  pageSize: number;
}

export type CreateNewPost = Omit<ITablePost, 'id'>;
