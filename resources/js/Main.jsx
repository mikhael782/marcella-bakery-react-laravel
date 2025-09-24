import React from "react";
import ReactDOM from "react-dom/client";
import AppContent from "./app"; // path ke App.jsx
import '../css/app.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContent />
  </React.StrictMode>
);