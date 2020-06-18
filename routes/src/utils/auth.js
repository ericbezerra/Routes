const STORAGE_KEY = "privateRoutesStudy";

const isLogged = () => !!localStorage.getItem(STORAGE_KEY);
const login = (token) => localStorage.setItem(STORAGE_KEY, token);
const logout = () => localStorage.removeItem(STORAGE_KEY);

export { isLogged, login, logout };
