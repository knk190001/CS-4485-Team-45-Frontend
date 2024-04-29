import { Link } from "react-router-dom";

function Instructions() {
  return (
    <div className="card">
      <h1 className="altTitle">Instructions</h1>

      <h3>Joining a Game:</h3>
      <ul>
        <li>Click on "Start Game" to join a game session</li>
      </ul>

      <h3>Getting Dealt Cards:</h3>
      <ul>
        <li>Once you're in the game, you'll be dealt 7 cards from the deck</li>
        <li>These cards will be yours to play against your opponents</li>
      </ul>

      <h3>Cards:</h3>
      <ul>
        <li>
          <strong>Number Cards (0-9):</strong> These are the most common cards.
          Play them if they match the color or number of the top card on the
          discard pile
        </li>
        <li>
          <strong>Action Cards:</strong>
          <ul>
            <li>
              <strong>Skip Card:</strong> Skips the next player's turn
            </li>
            <li>
              <strong>Reverse Card:</strong> Reverses the direction of play
            </li>
            <li>
              <strong>Draw Two Card:</strong> The next player draws two cards
              and loses their turn
            </li>
          </ul>
        </li>
        <li>
          <strong>Wild Cards:</strong>
          <ul>
            <li>
              <strong>Wild Card:</strong> Change the current color in play to a
              color of your choice
            </li>
            <li>
              <strong>Wild Draw Four Card:</strong> Changes the current color in
              play and The next player draws four cards and loses their turn
            </li>
          </ul>
        </li>
      </ul>

      <h3>Playing Your Turn:</h3>
      <ul>
        <li>Pick a card to play</li>
        <li>
          If no playable card, draw from the deck. Play it if playable,
          otherwise, pass the turn.
        </li>
      </ul>

      <h3>Winning the Game:</h3>
      <ul>
        <li>The first player to get rid of all their cards wins</li>
        <li>
          Use strategy and pay attention to your opponents' moves to increase
          your chances of winning
        </li>
      </ul>

      <p>Good luck and have fun!</p>

      <Link to="/lobby">
        <button>Back to Lobby</button>
      </Link>
    </div>
  );
}

export default Instructions;
