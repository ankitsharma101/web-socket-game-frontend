<<<<<<< HEAD
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

function Thumbnail() {
  const location = useLocation();

  function tilegame() {
    window.location.href = "http://localhost:3000/tile-game";
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
    fetch("http://localhost:5000/auth/current_user", {
      credentials: "include", // To include cookies in the request
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setUser(data);
        }
      });
=======
// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    let clientId = null;
      let gameId = null;
      let playerColor = null;

      let ws = new WebSocket(process.env.REACT_APP_BACKEND_WEBSOCKET_URL);
      // https://
      const btnCreate = document.getElementById("btnCreate");
      const btnJoin = document.getElementById("btnJoin");
      const txtGameId = document.getElementById("txtGameId");
      const divPlayers = document.getElementById("divPlayers");
      const divBoard = document.getElementById("divBoard");

      //wiring events
      btnJoin.addEventListener("click", (e) => {
        if (gameId === null) gameId = txtGameId.value;

        const payLoad = {
          method: "join",
          clientId: clientId,
          gameId: gameId,
        };

        ws.send(JSON.stringify(payLoad));
      });

      btnCreate.addEventListener("click", (e) => {
        const payLoad = {
          method: "create",
          clientId: clientId,
        };

        ws.send(JSON.stringify(payLoad));
      });

      ws.onmessage = (message) => {
        //message.data
        const response = JSON.parse(message.data);
        //connect
        if (response.method === "connect") {
          clientId = response.clientId;
          console.log("Client id Set successfully " + clientId);
        }

        //create
        if (response.method === "create") {
          gameId = response.game.id;
          console.log(
            "game successfully created with id " +
              response.game.id +
              " with " +
              response.game.balls +
              " balls"
          );
        }

        //update
        if (response.method === "update") {
          //{1: "red", 1}
          if (!response.game.state) return;
          for (const b of Object.keys(response.game.state)) {
            const color = response.game.state[b];
            const ballObject = document.getElementById("ball" + b);
            ballObject.style.backgroundColor = color;
          }
        }

        //join
        if (response.method === "join") {
          const game = response.game;

          while (divPlayers.firstChild)
            divPlayers.removeChild(divPlayers.firstChild);

          game.clients.forEach((c) => {
            const d = document.createElement("div");
            d.style.width = "200px";
            d.style.background = c.color;
            d.textContent = c.clientId;
            divPlayers.appendChild(d);

            if (c.clientId === clientId) playerColor = c.color;
          });

          while (divBoard.firstChild) divBoard.removeChild(divBoard.firstChild);

          for (let i = 0; i < game.balls; i++) {
            const b = document.createElement("button");
            b.id = "ball" + (i + 1);
            b.tag = i + 1;
            b.textContent = i + 1;
            b.style.width = "150px";
            b.style.height = "150px";
            b.addEventListener("click", (e) => {
              b.style.background = playerColor;
              const payLoad = {
                method: "play",
                clientId: clientId,
                gameId: gameId,
                ballId: b.tag,
                color: playerColor,
              };
              ws.send(JSON.stringify(payLoad));
            });
            divBoard.appendChild(b);
          }
        }
      };



>>>>>>> 5673b7d367d34615bf0f6157306f0cfd927d87a4
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tile-game" element={<TilesGame />} />
        </Routes>
        <Thumbnail />
      </Router>
=======
      {/* <h1>My Frontend</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}

    <h1>Ball Game</h1>
    <button id="btnCreate">New Game</button>
    <button id="btnJoin">Join Game</button>
    <input type="text" id="txtGameId" />
    <div id="divPlayers"></div>
    <div id="divBoard"></div>


>>>>>>> 5673b7d367d34615bf0f6157306f0cfd927d87a4
    </div>
  );
}

export default App;
