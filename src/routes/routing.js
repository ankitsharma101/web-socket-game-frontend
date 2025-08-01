import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../components/Profile";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import TilesGame from "../games/TilesGame";
import TicTacToeGame from "../games/TicTacToe";

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
