import React, { useState } from "react";
import './Connexion.css';
import Navbar from "../Navbar/Navbar";
import email from '../../assets/email.png';
import motDePasse from '../../assets/password.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Connexion = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const motDePasse = event.target.elements.motDePasse.value; 

        try {
            const response = await axios.post('http://localhost:8081/users/connexion', {
                email: email,
                motDePasse: motDePasse
            });
            localStorage.setItem('userId', response.data.idUtilisateur); // Stockage de l'ID de l'utilisateur
            navigate('/user'); // Redirection vers la page /user
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
            // Gérez les erreurs, par exemple afficher un message d'erreur à l'utilisateur
        }
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
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="input">
                            <img src={motDePasse} alt="" />
                            <input type="password" name="motDePasse" placeholder="Mot de passe" />
                        </div>
                    </div>
                    <div className="forgot-password">Mot de passe oublié ? <span>Cliquer ici !</span></div>
                    <div className="submit-container">
                        <div className="submit gray" onClick={redirectToInscription}>S'inscrire</div>
                        <button className="submit">Se connecter</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Connexion;
