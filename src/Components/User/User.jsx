import React, { useState } from 'react';
import './User.css';
import Profil from './Profil/Profil';
import Reservations from './Reservations/Reservations';
import Paiements from './Paiements/Paiements';
import person from '../../assets/person.png';
import payment from '../../assets/payment.png';
import parking from '../../assets/parking.png';

const User = () => {
    const [selectedOption, setSelectedOption] = useState('profil');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem('userId');
        if (userIdFromStorage) {
            setUserId(userIdFromStorage);
        } else {
            console.log("Identifiants incorrects");
        }
    }, []);

    const handleProfileClick = () => {
        setSelectedOption('profil');
    };

    const handleReservationsClick = () => {
        setSelectedOption('reservations');
    };

    const handlePaiementsClick = () => {
        setSelectedOption('paiements');
    };

    let content;
    if (selectedOption === 'profil') {
        content = <Profil />;
    } else if (selectedOption === 'reservations') {
        content = <Reservations />;
    } else if (selectedOption === 'paiements') {
        content = <Paiements />;
    }

    return (
        <div className='user-container'>
            <div className="user-background">
                <div className="sidebar">
                    <div className="logo"><a href="/">ValenPark</a></div>
                    <div className="menu">
                        <div className="item" onClick={handleProfileClick}> <img src={person} alt="Profile" />Profil</div>
                        <div className="item" onClick={handleReservationsClick}> <img src={parking} alt="Reservations" />Réservations</div>
                        <div className="item" onClick={handlePaiementsClick}> <img src={payment} alt="Paiements" />Paiements</div>
                    </div>
                </div>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    );
};

export default User;
