export class Book {
  title: string;
  author: string;
  metadata: string;
  users: Array<user>;
}

export interface user {
    id: number;
    name: string;
}