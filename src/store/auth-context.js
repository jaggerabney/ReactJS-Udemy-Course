import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  function onLogout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  function onLogin(email, password) {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: onLogout, onLogin: onLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
