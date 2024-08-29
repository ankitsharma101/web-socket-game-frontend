import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import MainNavigation from "./NavigationBar/MainNavigation";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import TilesGame from "./games/TilesGame";
import FloatingWidget from "./games/FloatingWidget";

function Thumbnail() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleTileGameRedirect() {
    navigate("/tile-game");
  }
  return (
    <>
      {location.pathname !== "/tile-game" && (
        <div className="thumbnail-container">
          <img
            src="https://i.pinimg.com/736x/78/ec/2d/78ec2d2ab3f94458cc857260efa32b10.jpg"
            onClick={handleTileGameRedirect}
            alt="Tiles Game"
          />
        </div>
      )}
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

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
