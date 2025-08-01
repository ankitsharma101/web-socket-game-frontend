const BACKEND_URL = process.env.REACT_APP_BACKEND_URL; // Use the environment variable only

export const login = () => {
  if (!BACKEND_URL) {
    console.error("BACKEND_URL is not defined");
    return;
  }
  window.location.href = `${BACKEND_URL}/auth/google`;
};

export const logout = () => {
  if (!BACKEND_URL) {
    console.error("BACKEND_URL is not defined");
    return;
  }
  window.location.href = `${BACKEND_URL}/auth/logout`;
};

export const getCurrentUser = async () => {
  if (!BACKEND_URL) {
    console.error("BACKEND_URL is not defined");
    return null;
  }
  const response = await fetch(`${BACKEND_URL}/auth/current_user`, {
    credentials: "include", // To include cookies in the request
  });
  if (response.ok) {
    return response.json();
  }
  return null;
};
