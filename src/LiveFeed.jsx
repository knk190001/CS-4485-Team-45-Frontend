import {useGameState} from "./GameStateRoot.jsx";

export default function LiveFeed() {
    const gamestate = useGameState();
    const currentPlayer = (gamestate || {}).currentPlayer;
    const currentPlayerIndex = (gamestate || { players:[]}).players.flatMap((player, index) => {
        if ((player || {}).username === (currentPlayer || {}).username) {
            return [index];
        }
        return [];
    })[0];
    return <div id="livefeed">
        <h2>Current Turn: Player {currentPlayerIndex} @{(currentPlayer || {}).username}</h2>
        <h2>Player 2 @username just played a Yellow Reverse card</h2>
        <h2>Player 1 @username has 4 cards</h2>
        <h2>Player 2 @username has 6 cards</h2>
    </div>
}