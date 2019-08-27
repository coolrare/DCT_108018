export interface LoginUser {
  user: User;
}

export interface User {
  username: string;
  token: string;
  email: string;
  bio: string;
  image?: any;
}

export interface LoginInfo {
  email: string;
  password: string;
}
