import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import TilesGame from "../games/tiles-game/TilesGame";
import TicTacToeGame from "../games/tic-tac-toe/TicTacToe";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/tile-game" element={<TilesGame />} />
      <Route path="/tic-tac-toe-game" element={<TicTacToeGame />} />
    </Routes>
  );
}

export default AppRoutes;
