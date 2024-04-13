import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Accueil = () => {
  let heroData = [
    {text1:"Votre Compagnon de parking", text2:"fiable et efficace."},
    {text1:"Trouvez votre place de parking", text2:"en un clic."},
    {text1:"Gagnez du temps et economisez de l'argent", text2:"avec ValenPark !"}
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default Accueil;
