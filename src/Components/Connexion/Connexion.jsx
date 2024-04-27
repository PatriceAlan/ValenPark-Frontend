import React, { useState } from "react";
import './Connexion.css';
import Navbar from "../Navbar/Navbar";
import email from '../../assets/email.png';
import motDePasse from '../../assets/password.png'; // Renommez la variable à 'motDePasse'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Connexion = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const motDePasse = event.target.elements.motDePasse.value; // Utilisez 'motDePasse' ici

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
                            <input type="text" name="email" placeholder="Email" /> {/* Ajoutez le nom 'email' ici */}
                        </div>
                        <div className="input">
                            <img src={motDePasse} alt="" />
                            <input type="password" name="motDePasse" placeholder="Mot de passe" /> {/* Ajoutez le nom 'motDePasse' ici */}
                        </div>
                    </div>
                    <div className="forgot-password">Mot de passe oublié ? <span>Cliquer ici !</span></div>
                    <div className="submit-container">
                        <div className="submit gray" onClick={redirectToInscription}>S'inscrire</div>
                        <button type="submit" className="submit">Se connecter</button> {/* Changez le div en button */}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Connexion;
