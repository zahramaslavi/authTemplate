interface IOauthUser {
  id: string;
  username: string;
  refresh_token?: string;
}

export default IOauthUser;