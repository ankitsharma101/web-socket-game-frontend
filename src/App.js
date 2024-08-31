import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";
import MainNavigation from "./NavigationBar/MainNavigation";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import TilesGame from "./games/TilesGame";
import FloatingWidget from "./games/FloatingWidget";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

function Thumbnail() {
  const location = useLocation();

  function tilegame() {
    window.location.href = `${FRONTEND_URL}/tile-game`;
  }
  return (
    <>
      {location.pathname !== "/tile-game" && (
        <div className="thumbnail-container">
          <img
            src="https://i.pinimg.com/736x/78/ec/2d/78ec2d2ab3f94458cc857260efa32b10.jpg"
            onClick={tilegame}
            alt="Tiles Game"
          />
        </div>
      )}
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${BACKEND_URL}/auth/current_user`, {
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
    <div>
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tile-game" element={<TilesGame />} />
        </Routes>
        <Thumbnail />
      </Router>
    </div>
  );
}

export default App;
