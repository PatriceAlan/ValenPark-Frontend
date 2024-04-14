import React from 'react';

const Profil = () => {
    return (
        <div className='user-profile'>
            <h1>Profil Utilisateur</h1>
            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="card-text"><strong>Nom :</strong> John</p>
                                <p className="card-text"><strong>Prénom :</strong> Doe</p>
                                <p className="card-text"><strong>Email :</strong> john@example.com</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="card-text"><strong>Mot de passe :</strong> ********</p>
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

export default Profil;
