import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { APIProvider } from "@vis.gl/react-google-maps";
import { api } from "./map-api-key.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <APIProvider apiKey={api}>
      <App></App>
    </APIProvider>
  </StrictMode>
);
