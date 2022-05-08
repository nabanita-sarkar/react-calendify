import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./components/Calendar";
import "./styles/normalize.scss";

const events = [
  {
    title: "Test Event",
    start: "2022-05-07 05:50:00",
    end: "2022-05-18 06:40:00",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Calendar type="weekly" events={events} />
  </React.StrictMode>,
  document.getElementById("root")
);
