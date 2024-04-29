import {createContext, useContext, useState} from "react";


export const PlayerStateContext = createContext(null);

export function usePlayerState() {
  return useContext(PlayerStateContext);
}

export function usePlayerName() {
  return usePlayerState().name;
}

export default function PlayerNameProvider({ children }) {
  const [playerState, setPlayerState] = useState( {
    name: "",
    setPlayerName: (newName) => {
      console.log(`New Name is ${newName}`);
      setPlayerState({
        ...playerState,
        name: newName
      })
    }
  });



  return <PlayerStateContext.Provider value={playerState}>{children}</PlayerStateContext.Provider>;

}