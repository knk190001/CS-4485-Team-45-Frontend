import back from "./cardImgs/backOfCard.png";

export default function Pile() {
  const drawCard = async () => {
    try {
      const response = await fetch("/api/game/drawCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const gameState = await response.json();
        // Handle the updated game state if needed
      } else {
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
