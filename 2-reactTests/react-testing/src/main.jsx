import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ChangeOnClick from "./components/ChangeClick.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ChangeOnClick />
  </React.StrictMode>
);
