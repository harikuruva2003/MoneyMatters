import "./App.css";

import React, { useEffect } from "react";
import { MoneyMattersApp } from "./components/MoneyMattersApp/MoneyMattersApp";

function App() {
  useEffect(() => {
    return () => {
      console.log("component un mount");
    };
  });

  return <MoneyMattersApp />;
}

export default App;
