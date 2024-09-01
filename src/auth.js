// src/NavigationBar/auth.js

// Use environment variables for backend URL
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// Function to handle login by redirecting to the backend's Google OAuth route
export const login = () => {
  window.location.href = `${BACKEND_URL}/auth/google`; // Redirect to the backend's Google authentication route
};

// Function to handle logout by redirecting to the backend's logout route
export const logout = () => {
  window.location.href = `${BACKEND_URL}/auth/logout`; // Redirect to backend's logout route
};

// Function to fetch the current user data from the backend
export const getCurrentUser = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/current_user`, {
      credentials: "include", // Include cookies for session management
    });
    if (response.ok) {
      return await response.json(); // Return the fetched user data
    }
  } catch (error) {
    console.error("Failed to fetch user:", error); // Log any errors
  }
  return null; // Return null in case of an error
};
