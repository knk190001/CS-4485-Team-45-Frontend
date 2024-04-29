import back from "./cardImgs/backOfCard.png";
import {useContext} from "react";
import {PrefixContext} from "./index.jsx";

export default function Pile() {
  const prefix = useContext(PrefixContext);
  const drawCard = async () => {
    try {
      const response = await fetch(`${prefix}/api/game/drawCard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error("Failed to draw card:", response.status);
      }
    } catch (error) {
      console.error("Error while drawing card:", error);
    }
  };

  return (
    <button id="drawPile" onClick={drawCard}>
      <img src={back} alt="Draw Pile" width={140} />
    </button>
  );
}
