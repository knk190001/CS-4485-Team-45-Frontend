import Popup from "reactjs-popup";
import {useContext, useState} from "react";
import wild from "./cardImgs/wild-card-clipart-md.png";
import {PrefixContext} from "./index.jsx";

export default function WildColor(props) {
  const [open, setOpen] = useState(false);
  const prefix = useContext(PrefixContext)
  const playWild = async (color) => {
    const response = await fetch(`${prefix}/api/game/playCard/${props.card.id}/${color}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error("Failed to play card:", response.status);
    }
    setOpen(false);
  };

  return (
    <>
      <button className="handCards" onClick={() => setOpen(true)}>
        <img src={wild} width={100}/>
      </button>
      <Popup
        modal
        nested
        open={open}
      >
        <div className="modal">
          <div className="content">
            <h1 className="altTitle">Choose a color</h1>
            <button
              id="chooseRed"
              onClick={() => playWild("red")}>
              red
            </button>
            <button
              id="chooseYellow"
              onClick={() => playWild("yellow")}>
              yellow
            </button>
            <button
              id="chooseGreen"
              onClick={() => playWild("green")}>
              green
            </button>
            <button
              id="chooseBlue"
              onClick={() => playWild("blue")}>
              blue
            </button>
          </div>
          <div>
            <button onClick={() => setOpen(false)}>Done</button>
          </div>
        </div>
      </Popup>
    </>


  );
}