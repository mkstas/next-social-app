export interface User {
  userId: number;
  userName: string;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface RegisterData extends AuthData {
  userName: string;
}
