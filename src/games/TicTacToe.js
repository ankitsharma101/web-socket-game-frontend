import React, { useEffect, useState } from "react";
import { Chat, useChatContext, Channel } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

import "./TicTacToe.css";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const TicTacToeGame = () => {
  const Game = ({ channel }) => {
    const [playersJoined, setPlayersJoined] = useState(
      channel.state.watcher_count === 2
    );
    if (!playersJoined) {
      return <div>Waiting for other player to join...</div>;
    }
    return <div>Game</div>;
  };

  const JoinGame = () => {
    const [rivalUsername, setRivalUsername] = useState("");
    const { client } = useChatContext();
    const [channel, setChannel] = useState(null);
    const createChannel = async () => {
      const response = await client.queryUsers({
        name: { $eq: rivalUsername },
      });

      if (response.users.length === 0) {
        alert("User not found");
        return;
      }

      const newChannel = await client.channel("messaging", {
        members: [client.userID, response.users[0].id],
      });
      await newChannel.watch();
      setChannel(newChannel);
    };
    return (
      <>
        {channel ? (
          <Channel channel={channel}>
            <Game channel={channel} />
          </Channel>
        ) : (
          <div className="joinGame">
            <h2>Create Game</h2>
            <input
              placeholder="User of rival..."
              onChange={(event) => {
                setRivalUsername(event.target.value);
              }}
            />
            <button onClick={createChannel}>Join/Start Game</button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="ticTacToeGame">
      <Login />
      <SignUp />
      <JoinGame />
    </div>
  );
};

export default TicTacToeGame;
