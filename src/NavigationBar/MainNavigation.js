import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";

const handleLogin = () => {
  window.location.href = `/auth/google`; // Ensure this matches your backend route
};

const handleLogout = () => {
  window.location.href = `/auth/logout`;
};

function profilepage() {
  window.location.href = `/profile`;
}

const MainNavigation = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`/auth/current_user`, {
      credentials: "include", // To include cookies in the request
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setUser(data);
        }
      });
  }, []);
  return (
    <nav style={styles.navbar}>
  <ul style={styles.navList}>
    {user ? (
      <div className="nav-bar">
        <button onClick={handleLogout}>Logout</button>
        <Link to="/" style={styles.link}>
          <img onClick={profilepage} src={user.avatar} alt="avatar" className="avatar" />
        </Link>
      </div>
    ) : (
      <button onClick={handleLogin}>Login with Google</button>
    )}
  </ul>
</nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Vertically center the items
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
  }
};

export default MainNavigation;
