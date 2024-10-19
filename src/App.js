import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import { Chat } from "stream-chat-react";

import "./App.css";
import MainNavigation from "./components/NavigationBar/MainNavigation";
import Profile from "./components/Profile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TilesGame from "./games/TilesGame";
import TicTacToeGame from "./games/TicTacToe";
import FloatingWidget from "./games/FloatingWidget";
import Footer from "./components/BottomNavigation/Footer";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

function Thumbnail() {
  const location = useLocation();

  function tilegame() {
    window.location.href = `${FRONTEND_URL}/tile-game`;
  }
  function tictactoegame() {
    window.location.href = `http://localhost:3000/tic-tac-toe-game`;
  }
  return (
    <>
      {location.pathname !== "/tile-game" && (
        <div className="thumbnail-container" onClick={tilegame}>
          <img
            src="https://i.pinimg.com/736x/78/ec/2d/78ec2d2ab3f94458cc857260efa32b10.jpg"
            alt="Tiles Game"
          />
          <div className="overlay-text">Tiles Game</div> {/* Overlay Text */}
        </div>
      )}
      {location.pathname !== "/tic-tac-toe-game" && (
        <div className="thumbnail-container" onClick={tictactoegame}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7231/7231279.png"
            alt="Tic-Tac-Toe Game"
          />
          <div className="overlay-text">Tic-Tac-Toe-Game</div>{" "}
          {/* Overlay Text */}
        </div>
      )}
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const api_key = process.env.CHAT_API;
  const cookies = new Cookies();
  const token = cookies.get("token");

  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

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
          <Route path="/tic-tac-toe-game" element={<TicTacToeGame />} />
        </Routes>
        <Thumbnail />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
