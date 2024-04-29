import React, { useState } from "react";
import './Connexion.css';
import Navbar from "../Navbar/Navbar";
import email from '../../assets/email.png';
import password from '../../assets/password.png';
import { useNavigate } from "react-router-dom";

const Connexion = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Ajoutez ici la logique pour envoyer les données du formulaire
    };

    const redirectToInscription = () => {
        navigate('/inscription'); // Redirection vers /inscription
    };

    return (
        <div className="connexion">
            <Navbar />
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <div className="header">
                        <div className="text">Connexion</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={email} alt="" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input">
                            <img src={password} alt="" />
                            <input type="password" placeholder="Mot de passe" />
                        </div>
                    </div>
                    <div className="forgot-password">Mot de passe oublié ? <span>Cliquer ici !</span></div>
                    <div className="submit-container">
                        <div className="submit gray" onClick={redirectToInscription}>S'inscrire</div>
                        <div className="submit">Se connecter</div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Connexion;