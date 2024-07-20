import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting.jsx";
import App from "./App.jsx";
import PackingList from "./Packed.jsx";
import List from "./Array.jsx";
import PropsExm from "./Props.jsx";
import Gallery from "./Gallery.jsx";
import Backcolor from "./Color.jsx";
import Person from "./Age.jsx";
import Clock from "./Clock.jsx";
import RenderName from "./Rendername.jsx";
import MyApp from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <App />
    <PackingList />
    <List />
    <PropsExm />
    <Gallery />
    <Backcolor />
    <Person />
    <Clock />
    <RenderName />
    <MyApp />
  </React.StrictMode>
);
