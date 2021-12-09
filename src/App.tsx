import React, { useState } from "react";
import "./App.css";
import Time from "./Components/Time/Time";
import Users from "./Components/UsersTable/UsersTable";
import { ThemeProvider } from "./Contexts/ThemeContext";
import ITheme from "./Interfaces/ITheme";

function App() {
  const [Theme, setTheme] = useState<ITheme>({
    background: "#9ac2ed",
    color: "black",
  });

  function changeTheme() {
    const newBackground =
      Theme.background === "#9ac2ed" ? "#9aed9b" : "#9ac2ed";
    setTheme({
      background: newBackground,
      color: "black",
    });
  }

  return (
    <ThemeProvider value={Theme}>
      <div
        style={{ background: Theme.background, color: Theme.color }}
        className="App"
      >
        <h1>APP</h1>
        <button style={{ width: 100 }} onClick={() => changeTheme()}>
          Switch Theme
        </button>
        <Time />
        <Users />
      </div>
    </ThemeProvider>
  );
}

export default App;
