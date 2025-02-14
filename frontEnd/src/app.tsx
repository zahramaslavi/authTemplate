import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import TopAppBar from './components/topAppBar';
import Register from './components/register';
import Login from './components/login';
import Users from './components/users';
import AuthError from './components/authError';
import GithubCallback from './components/githubCallback';
import './app.css';
import { AuthProvider } from './contexts/authContext';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4f4f4f",
    },
    success: {
      main: "#4caf50",
      light: "#dff0d8"
    },
    info: {
      main: "#2196f3",
      light: "#d9edf7"
    }
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <TopAppBar></TopAppBar>
              
              <Routes>
                <Route path="/login" element={
                  <Login></Login>
                }>
                </Route>

                <Route path="/auth/github/callback" element={
                  <GithubCallback></GithubCallback>
                }>
                </Route>

                <Route path="/register" element={
                  <Register></Register>
                }>
                </Route>

                <Route path="/users" element={
                  <Users></Users>
                }>
                </Route>
              </Routes>
              <AuthError></AuthError>
            </AuthProvider>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
