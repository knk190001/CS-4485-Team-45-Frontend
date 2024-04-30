import {useContext} from "react";
import {PrefixContext} from "./index.jsx";

export default function QuitBttn() {
  const prefix = useContext(PrefixContext);
  const onQuit = async () => {
    await fetch(`${prefix}/api/game/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <button className="gameBttns" onClick={onQuit}>
      Quit
    </button>
  );
}
