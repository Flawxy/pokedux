import React from "react";
import "./styles.css";

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = () => {
  return (
    <div className="App">
      <GameBoy />
      <PokeList />
    </div>
  );
};

export default App;
