import { Route, Routes, Link, useNavigate } from "react-router-dom";

export default function QuitBttn() {
  return (
    <button className="gameBttns">
      <Link to="/lobby">Quit</Link>
    </button>
  );
}
