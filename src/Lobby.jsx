import { Link, useNavigate } from "react-router-dom";
import photo from "./logo.png";
import {useContext} from "react";
import {PrefixContext} from "./index.jsx";

function Lobby() {
  const navigate = useNavigate();
  const prefix = useContext(PrefixContext);

  const startGame = async () => {
    const request = {
      // Add any necessary properties for StartGameRequest
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    };

    try {
      const response = await fetch(`${prefix}/api/game/start`, requestOptions);
      const data = await response.json();
      // Assuming the server redirects to the game state page or something similar
      if (response.ok) {
        // Use React Router's history to navigate
        navigate("/game");
      } else {
        // Handle errors or unsuccessful start
        console.error("Failed to start game:", data);
        alert("Error starting game. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="lobby">
      <h1>Welcome to the UNO Online Multiplayer Game</h1>
      <img src={photo} id="lobbyImg" />
      <div className="lobbyContent">
        <button className="lobbyBttns" onClick={startGame}>
          <Link to="/game" className="link-button" style={{ color: "white" }}>
            Start Game
          </Link>
        </button>
        <button className="lobbyBttns">
          <Link
            to="/instructions"
            className="link-button"
            style={{ color: "white" }}
          >
            Instructions
          </Link>
        </button>
        <button className="lobbyBttns">
          <Link
            to="/leaderboard"
            className="link-button"
            style={{ color: "white" }}
          >
            Leaderboard
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Lobby;
