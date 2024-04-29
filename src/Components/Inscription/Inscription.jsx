import React from "react";
import Navbar from "../Navbar/Navbar";
import person from '../../assets/person.png';
import email from '../../assets/email.png';
import password from '../../assets/password.png';
import phone from '../../assets/phone.png';
import { useNavigate } from "react-router-dom"; // Import de useNavigate

const Inscription = () => {
    const navigate = useNavigate(); // Utilisation de useNavigate pour obtenir la fonction de navigation

    const redirectToConnexion = () => {
        navigate('/connexion'); // Redirection vers /connexion
    };

    return (
        <div className="inscription">
            <Navbar />
            <form>
                <div className="container">
                    <div className="header">
                        <div className="text">Inscription</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={person} alt="" />
                            <input type="text" placeholder="Nom" />
                        </div>
                        <div className="input">
                            <img src={person} alt="" />
                            <input type="text" placeholder="Prenom" />
                        </div>
                        <div className="input">
                            <img src={phone} alt="" />
                            <input type="text" placeholder="Numero de telephone" />
                        </div>
                        <div className="input">
                            <img src={email} alt="" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input">
                            <img src={password} alt="" />
                            <input type="password" placeholder="Mot de passe" />
                        </div>
                    </div>
                    <div className="submit-container">
                        <div className="submit">S'inscrire</div>
                        <div className="submit gray" onClick={redirectToConnexion}>Se connecter</div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Inscription;