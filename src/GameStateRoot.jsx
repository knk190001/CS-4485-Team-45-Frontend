import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PrefixContext} from "./index.jsx";

const GameStateContext = createContext(null);

export function useGameState() {
  return useContext(GameStateContext).gameState;
}

export function useManualUpdate() {
  return useContext(GameStateContext).manualUpdate
}

export default function GameStateRoot(props) {
  const navigate = useNavigate();
  let [gameState, setGameState] = useState({
    manualUpdate: async () => await updateState(),
    gameState: null
  });
  const prefix = useContext(PrefixContext);

  useEffect(()=> {
    const events = new EventSource(`${prefix}/api/game/events`);
    updateState().then();

    events.onmessage = async (evt) => {
      console.log(evt)
      const data = JSON.parse(evt.data);
      if (data === "START") {
        navigate("/game");
      } else if (data === "UPDATE") {
        await updateState();
      } else if(data === "RESET") {
        navigate("/");
        setGameState(null)
      }else if (data === "END") {
        //TODO
      }
    }

    return () => {
      events.close();
    };

  }, []);

  async function updateState() {
    try {
      const response = await fetch(`${prefix}/api/game/getGameState`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const newGameState = await response.json();
        console.log(newGameState);
        setGameState({
          ...gameState,
          gameState: newGameState
        });
      } else {
        console.error("Failed to fetch the game state:", response.status);
      }
    } catch (error) {
      console.error("Error while fetching game state:", error);
    }
  }


  return <GameStateContext.Provider children={props.children} value={gameState}/>
}