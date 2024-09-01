// src/NavigationBar/auth.js
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const login = () => {
  window.location.href = `${BACKEND_URL}/auth/google`;
};

export const logout = () => {
  window.location.href = `${BACKEND_URL}/auth/logout`;
};

export const getCurrentUser = async () => {
  const response = await fetch(`${BACKEND_URL}/auth/current_user`, {
    credentials: "include",
  });
  if (response.ok) {
    return response.json();
  }
  return null;
};
