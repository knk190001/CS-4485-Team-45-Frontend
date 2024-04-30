import Pile from "./Pile.jsx";
import QuitBttn from "./QuitBttn.jsx";
import Help from "./HelpBttn.jsx";
import Hand from "./Hand.jsx";
import Top from "./topCard.jsx";
import LiveFeed from "./LiveFeed.jsx";
import GameStateRoot from "./GameStateRoot.jsx";

export default function Game() {
  return (
      <GameStateRoot>
          <div id="interface">
              <div id="gametable">
                  <Pile/>
                  <Top/>
              </div>
              <div id="playersHand">
                  <Hand/>
              </div>
              <LiveFeed/>
              <div id="gameBttnArea">
                  <QuitBttn/>
                  <Help/>
              </div>
          </div>
      </GameStateRoot>
  );
}
