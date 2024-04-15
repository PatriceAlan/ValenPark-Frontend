import Parkings from '../Parkings/Parkings';
import React from 'react';

const Reservations = () => {
    return (
        <div className='user-reservations'>
            <div className='reservations-title'>
                <h1>Réservations</h1>
            </div>
            <div className='reservations-reserver'>
                <a href="/parkings"><button type="button" className="btn btn-primary">Reserver une place de parking</button></a>
            
            </div>
            
            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="card-text"><strong>Place :</strong> 1</p>
                                <p className="card-text"><strong>Date :</strong> 01/01/2022</p>
                                <p className="card-text"><strong>Heure :</strong> 12:00</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="card-text"><strong>Durée :</strong> 1h</p>
                                <p className="card-text"><strong>Prix :</strong> 1€</p>
                            </div>
                        </div>
                        <br />
                        <button type="button" className="btn btn-warning">Modifier la reservation</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Reservations;
