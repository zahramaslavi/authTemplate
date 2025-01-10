export interface AuthDataI {
  email?: string,
  password?: string
};

export interface AuthInitStateI {
  email: null | String,
  isAuthenticated: boolean,
  errorState: null | number,
  errorMessage: null | String
}

export interface AuthContextI {
  state: AuthInitStateI
  reg: (authData: AuthDataI) => void,
  login: (authData: AuthDataI) => void,
  logout: () => void,
  clearError: () => void
}

