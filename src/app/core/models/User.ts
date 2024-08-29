export interface User {
  id: ID;
  name: string;
  surname: string;
  email: string;
  phone?: string;
}
export interface AddUser {
  name: string;
  surname: string;
  email: string;
  phone?: string;
}

export type ID = number;
