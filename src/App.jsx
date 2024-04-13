import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Components/Accueil/Accueil";
import Explorer from "./Components/Explorer/Explorer";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/explorer" element={<Explorer />} />
        
      </Routes>
    </Router>
  );
};

export default App;
