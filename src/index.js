import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Tooltip } from "react-tooltip";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Tooltip id="tooltip" />
    <App />
  </StrictMode>
);
