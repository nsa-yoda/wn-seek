import { createContext, useState, useContext } from "react";

const appContext = createContext({});

export const useAppContext = () => useContext(appContext);

export const AppContextProvider = ({ children }) => {
  const [type, setType] = useState("coverage");

  // put what should be accessed from app context here.
  const contextValues = {
    type,
    setType,
  };

  return (
    <appContext.Provider value={contextValues}>{children}</appContext.Provider>
  );
};
