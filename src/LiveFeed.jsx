import {useGameState} from "./GameStateRoot.jsx";

export default function LiveFeed() {
    const gamestate = useGameState();
    const currentPlayer = ((gamestate || {}).currentPlayer || {}).username;
    const findPlayerNumber = (player) => {

        return (gamestate || {players: []}).players.findIndex((other) => {
            return player === other.username;
        }) + 1;
    };

    const currentPlayerIndex = findPlayerNumber(currentPlayer);

    const playerString = (player) => {
        return <span>Player {findPlayerNumber(player)}@{player}</span>
    };

    return <div id="livefeed">
        <h2>Current Turn: Player {currentPlayerIndex} @{(currentPlayer || {}).username}</h2>
        {
            (gamestate || { actions:[]} ).actions.reverse().map((actionRecord, index) => {
                switch (actionRecord.action) {
                    case "PLAYED":
                        return <h2 key={index}>{playerString(actionRecord.username)} played a {actionRecord.card.color.toLowerCase()} {actionRecord.card.num}</h2>
                    case "DREW":
                      return <h2 key={index}>{playerString(actionRecord.username)} drew a card</h2>
                    case "SKIPPED":
                        return <h2 key={index}>{playerString(actionRecord.username)} skipped {playerString(actionRecord.target)}</h2>
                    case "REVERSE":
                        return <h2 key={index}>{playerString(actionRecord.username)} reversed the order</h2>
                    case "DRAW_TWO":
                        return <h2 key={index}>{playerString(actionRecord.username)} made {playerString(actionRecord.target)} draw
                            2 cards</h2>
                    case "WILD":
                        return <h2 key={index}>{playerString(actionRecord.username)} changed the color to {actionRecord.card.color}</h2>
                    default:
                        return <span key={index}></span>;
                }
            })
        }
    </div>
}