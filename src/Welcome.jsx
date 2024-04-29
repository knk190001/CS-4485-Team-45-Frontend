import { Route, Routes, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "./logo.png";

export default function Welcome() {
  const [player, setPlayer] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/lobby/join/${player}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.text();
        console.log(result); // Log or handle the response from the server
        // Redirect to lobby or do something else as needed
      } else {
        console.error("Failed to join lobby:", response.status);
      }
    } catch (error) {
      console.error("Error while joining lobby:", error);
    }
  };

  const handlePlayerChange = (event) => {
    setPlayer(event.target.value);
  };

  return (
    <div id="welcomeScreen">
      <img src={logo} alt="Logo" id="welcomeLogo" />
      <div id="usernameForm">
        <h1>Enter your name to play:</h1>
        <form onSubmit={handleSubmit}>
          <input name="query" value={player} onChange={handlePlayerChange} />
          <button type="submit" className="lobbyBttns">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
