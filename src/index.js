import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ForumContextProvider } from "./context/ForumContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ForumContextProvider>
      <App />
    </ForumContextProvider>
  </StrictMode>
);
