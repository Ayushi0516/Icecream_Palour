import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null
  });
  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  }
  function handleLogout() {
    setState({
      ...state,
      isAuth: true,
      token: null
    });
  }
  return (
    <AuthContext.Provider value={{ state, handleLogout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;