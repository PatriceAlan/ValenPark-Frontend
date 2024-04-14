
import React from 'react';

const Paiements = () => {
    return (
        <div className='user-paiements'>
            <h1>Paiements</h1>
            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="card-text"><strong>Carte :</strong> Visa</p>
                                <p className="card-text"><strong>Date d'expiration :</strong> 01/23</p>
                                <p className="card-text"><strong>Titulaire :</strong> John Doe</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="card-text"><strong>Numéro :</strong> **** **** **** 1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer text-right">
                <button type="button" className="btn btn-warning">Modifier</button>
            </div>
        </div>
    );
};

export default Paiements;
