import React, { useState } from "react";
import './Connexion.css';
import Navbar from "../Navbar/Navbar";
import person from '../../assets/person.png';
import email from '../../assets/email.png';
import password from '../../assets/password.png';
import phone from '../../assets/phone.png';

const Connexion = () => {
    const [action, setAction] = useState("Se connecter");

    return (
        <div className="connexion">
            <Navbar />
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs">
                    {action === "S'inscrire" ? (
                        <>
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
                        </>
                    ) : null}
                    
                    <div className="input">
                        <img src={email} alt="" />
                        <input type="text" placeholder="Email" />
                    </div>

                    <div className="input">
                        <img src={password} alt="" />
                        <input type="password" placeholder="Mot de passe" />
                    </div>
                    
                </div>

                {action === "Se connecter" ? (
                    <div className="forgot-password">Mot de passe oublie ? <span>Cliquer ici !</span></div>
                ) : null}
                <div className="submit-container">
                    <div className={action === "Se connecter" ? "submit gray" : "submit"} onClick={() => { setAction("S'inscrire") }}>S'inscrire</div>
                    <div className={action === "S'inscrire" ? "submit gray" : "submit"} onClick={() => { setAction("Se connecter") }}>Se connecter</div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
