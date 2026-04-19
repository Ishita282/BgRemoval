import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import "./index.css";
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
