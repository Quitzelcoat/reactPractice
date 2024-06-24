import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting.jsx";
import App from "./App.jsx";
import PackingList from "./Packed.jsx";
import List from "./Array.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <App />
    <PackingList />
    <List />
  </React.StrictMode>
);
