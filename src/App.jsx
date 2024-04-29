import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Lobby from "./Lobby.jsx";
import Leaderboard from "./Leaderboard.jsx";
import Instructions from "./Instructions.jsx";
import Welcome from "./Welcome.jsx";
import Game from "./MainGame.jsx";



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}
