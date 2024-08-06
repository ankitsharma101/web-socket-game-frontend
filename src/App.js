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



  }, []);

  return (
    <div>
      {/* <h1>My Frontend</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}

    <h1>Ball Game</h1>
    <button id="btnCreate">New Game</button>
    <button id="btnJoin">Join Game</button>
    <input type="text" id="txtGameId" />
    <div id="divPlayers"></div>
    <div id="divBoard"></div>


    </div>
  );
}

export default App;
