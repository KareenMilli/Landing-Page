import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ });
  const [token, _setTOken] = useState(null);
  const setToken = (token) => {
    _setTOken(token);
    if (token) {
      localStorage.setItem("Access_Token", token);
    } else {
      localStorage.removeItem("Access_Token");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
