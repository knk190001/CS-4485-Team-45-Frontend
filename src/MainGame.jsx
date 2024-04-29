import Pile from "./Pile.jsx";
import QuitBttn from "./QuitBttn.jsx";
import Help from "./HelpBttn.jsx";
import Hand from "./Hand.jsx";
import Top from "./topCard.jsx";

export default function Game() {
  return (
    <div id="interface">
      <div id="gametable">
        <Pile />
        <Top />
      </div>
      <div id="playersHand">
        <Hand />
      </div>
      <div id="livefeed">
        <h2>Current Turn: Player 1 @username</h2>
        <h2>Player 2 @username just played a Yellow Reverse card</h2>
        <h2>Player 1 @username has 4 cards</h2>
        <h2>Player 2 @username has 6 cards</h2>
      </div>
      <div id="gameBttnArea">
        <QuitBttn />
        <Help />
      </div>
    </div>
  );
}
