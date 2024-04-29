import React, { useState, useEffect } from "react";

import blue0 from "./cardImgs/blue-0-card-clipart-md.png";
import blue1 from "./cardImgs/blue-1-card-clipart-md.png";
import blue2 from "./cardImgs/blue-2-card-clipart-md.png";
import blue3 from "./cardImgs/blue-3-card-clipart-md.png";
import blue4 from "./cardImgs/blue-4-card-clipart-md.png";
import blue5 from "./cardImgs/blue-5-card-clipart-md.png";
import blue6 from "./cardImgs/blue-6-card-clipart-md.png";
import blue7 from "./cardImgs/blue-7-card-clipart-md.png";
import blue8 from "./cardImgs/blue-8-card-clipart-md.png";
import blue9 from "./cardImgs/blue-9-card-clipart-md.png";
import blueDraw2 from "./cardImgs/blue-draw-two-card-clipart-md.png";
import bluerev from "./cardImgs/blue-reverse-card-clipart-md.png";
import blueskip from "./cardImgs/blue-skip-card-clipart-md.png";

import green0 from "./cardImgs/green-0-card-clipart-md.png";
import green1 from "./cardImgs/green-1-card-clipart-md.png";
import green2 from "./cardImgs/green-2-card-clipart-md.png";
import green3 from "./cardImgs/green-3-card-clipart-md.png";
import green4 from "./cardImgs/green-4-card-clipart-md.png";
import green5 from "./cardImgs/green-5-card-clipart-md.png";
import green6 from "./cardImgs/green-6-card-clipart-md.png";
import green7 from "./cardImgs/green-7-card-clipart-md.png";
import green8 from "./cardImgs/green-8-card-clipart-md.png";
import green9 from "./cardImgs/green-9-card-clipart-md.png";
import greenDraw2 from "./cardImgs/green-draw-two-card-clipart-md.png";
import greenrev from "./cardImgs/green-reverse-card-clipart-md.png";
import greenskip from "./cardImgs/green-skip-card-clipart-md.png";

import red0 from "./cardImgs/red-0-card-clipart-md.png";
import red1 from "./cardImgs/red-1-card-clipart-md.png";
import red2 from "./cardImgs/red-2-card-clipart-md.png";
import red3 from "./cardImgs/red-3-card-clipart-md.png";
import red4 from "./cardImgs/red-4-card-clipart-md.png";
import red5 from "./cardImgs/red-5-card-clipart-md.png";
import red6 from "./cardImgs/red-6-card-clipart-md.png";
import red7 from "./cardImgs/red-7-card-clipart-md.png";
import red8 from "./cardImgs/red-8-card-clipart-md.png";
import red9 from "./cardImgs/red-9-card-clipart-md.png";
import redDraw2 from "./cardImgs/red-draw-two-card-clipart-md.png";
import redrev from "./cardImgs/red-reverse-card-clipart-md.png";
import redskip from "./cardImgs/red-skip-card-clipart-md.png";

import wild from "./cardImgs/wild-card-clipart-md.png";

import yellow0 from "./cardImgs/yellow-0-card-clipart-md.png";
import yellow1 from "./cardImgs/yellow-1-card-clipart-md.png";
import yellow2 from "./cardImgs/yellow-2-card-clipart-md.png";
import yellow3 from "./cardImgs/yellow-3-card-clipart-md.png";
import yellow4 from "./cardImgs/yellow-4-card-clipart-md.png";
import yellow5 from "./cardImgs/yellow-5-card-clipart-md.png";
import yellow6 from "./cardImgs/yellow-6-card-clipart-md.png";
import yellow7 from "./cardImgs/yellow-7-card-clipart-md.png";
import yellow8 from "./cardImgs/yellow-8-card-clipart-md.png";
import yellow9 from "./cardImgs/yellow-9-card-clipart-md.png";
import yellowDraw2 from "./cardImgs/yellow-draw-two-card-clipart-md.png";
import yellowrev from "./cardImgs/yellow-reverse-card-clipart-md.png";
import yellowskip from "./cardImgs/yellow-skip-card-clipart-md.png";

export default function Top() {
  const [topCard, setTopCard] = useState(null);

  useEffect(() => {
    const fetchTopCard = async () => {
      try {
        const response = await fetch("/game/getGameState", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const gameState = await response.json();
          // Extract the top card from the gameState
          const topCard = gameState.pile;
          setTopCard(topCard);
        } else {
          console.error("Failed to fetch the game state:", response.status);
        }
      } catch (error) {
        console.error("Error while fetching game state:", error);
      }
    };

    fetchTopCard();
  }, []);

  return <div id="topCard">
    {topCard && <img src={getImageForCard(topCard)} width={140} />}
  </div>;
}

// Helper function to get image based on card data
function getImageForCard(card) {
  const thisType = card.type;
  const thisColor = card.color;

  if (thisType==="WILD") {
    return wild;
  } else {
    if (thisColor==="RED") {
      if (thisType==="NUM") {
        const index = card.num;
        return redCards[index];
      } else if (thisType==="SKIP") {
        return redCards[12];
      } else if (thisType==="REVERSE") {
        return redCards[11];
      } else if (thisType==="DRAW_TWO") {
        return redCards[10];
      }
    } else if (thisColor==="BLUE") {
      if (thisType==="NUM") {
        const index = card.num;
        return blueCards[index];
      } else if (thisType==="SKIP") {
        return blueCards[12];
      } else if (thisType==="REVERSE") {
        return blueCards[11];
      } else if (thisType==="DRAW_TWO") {
        return blueCards[10];
      }
    } else if (thisColor==="GREEN") {
      if (thisType==="NUM") {
        const index = card.num;
        return greenCards[index];
      } else if (thisType==="SKIP") {
        return greenCards[12];
      } else if (thisType==="REVERSE") {
        return greenCards[11];
      } else if (thisType==="DRAW_TWO") {
        return greenCards[10];
      }
    } else if (thisColor==="YELLOW") {
      if (thisType==="NUM") {
        const index = card.num;
        return yellowCards[index];
      } else if (thisType==="SKIP") {
        return yellowCards[12];
      } else if (thisType==="REVERSE") {
        return yellowCards[11];
      } else if (thisType==="DRAW_TWO") {
        return yellowCards[10];
      }
    }
  }

  const redCards = [
    red0,
    red1,
    red2,
    red3,
    red4,
    red5,
    red6,
    red7,
    red8,
    red9,
    redDraw2, // index 10: Draw two
    redrev, // index 11: Reverse
    redskip, // index 12: Skip
  ];

  const blueCards = [
    blue0,
    blue1,
    blue2,
    blue3,
    blue4,
    blue5,
    blue6,
    blue7,
    blue8,
    blue9,
    blueDraw2, // index 10: Draw two
    bluerev, // index 11: Reverse
    blueskip, // index 12: Skip
  ];

  const greenCards = [
    green0,
    green1,
    green2,
    green3,
    green4,
    green5,
    green6,
    green7,
    green8,
    green9,
    greenDraw2, // index 10: Draw two
    greenrev, // index 11: Reverse
    greenskip, // index 12: Skip
  ];

  const yellowCards = [
    yellow0,
    yellow1,
    yellow2,
    yellow3,
    yellow4,
    yellow5,
    yellow6,
    yellow7,
    yellow8,
    yellow9,
    yellowDraw2, // index 10: Draw two
    yellowrev, // index 11: Reverse
    yellowskip, // index 12: Skip
  ];
}
