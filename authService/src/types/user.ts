interface IUser {
  id: string;
  email: string;
  password: string;
  refresh_token?: string;
}

export default IUser;