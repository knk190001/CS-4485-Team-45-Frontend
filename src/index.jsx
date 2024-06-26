import {createContext, StrictMode} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import PlayerNameProvider from "./cardImgs/PlayerNameRoot.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const PrefixContext = createContext(window.location.href.includes("localhost")? "http://localhost:80" : "")

root.render(
  <StrictMode>
    <BrowserRouter>
        <PlayerNameProvider>
          <App/>
        </PlayerNameProvider>
    </BrowserRouter>
  </StrictMode>
);
