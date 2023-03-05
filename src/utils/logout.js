export const logout = (e, setToken) => {
  setToken(null);
  localStorage.removeItem("xtk");
  return true;
};
