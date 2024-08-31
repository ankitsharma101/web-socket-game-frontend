import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login, logout, getCurrentUser } from '../auth'; // Adjust path if needed


import "./MainNavigation.css";

//const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

const MainNavigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };

    fetchUser();
  }, []);

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {user ? (
          <div className="nav-bar">
            <button onClick={logout}>Logout</button>
            <Link to="/" style={styles.link}>
              <img
                onClick={() => window.location.href = `${FRONTEND_URL}/profile`} // Redirect to profile page
                src={user.avatar}
                alt="avatar"
                className="avatar"
              />
            </Link>
          </div>
        ) : (
          <button onClick={() => login()}>Login with Google</button>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#7C00FE",
    color: "#fff",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  navList: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default MainNavigation;
