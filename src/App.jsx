import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Components/Accueil/Accueil";
import Explorer from "./Components/Explorer/Explorer";
import Connexion from "./Components/Connexion/Connexion";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </Router>
  );
};

export default App;
