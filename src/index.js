import React from "react";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App tab="home" />
    </AuthContextProvider>
  </React.StrictMode>
);
