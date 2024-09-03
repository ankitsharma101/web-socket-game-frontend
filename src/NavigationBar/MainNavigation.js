import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login, logout, getCurrentUser } from "../auth"; // Correct path if auth.js is in src directory

import "./MainNavigation.css";

const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL; // Ensure this is defined

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
                onClick={() => (window.location.href = `${FRONTEND_URL}/profile`)}
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
