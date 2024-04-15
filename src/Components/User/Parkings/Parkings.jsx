import React from 'react';
import Parking_image from '../../../assets/parking_image.jpg';

const Parkings = () => {
    return (
        <div className='parkings'>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Parking_image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Parking de la Rhonelle</h5>
                            <p className="card-text">Réputé pour être à proximité d'un des plus beaux musées de la ville.</p>
                            <a href="#" className="btn btn-primary">Choisir</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Parking_image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Parking de la Rhonelle</h5>
                            <p className="card-text">Réputé pour être à proximité d'un des plus beaux musées de la ville.</p>
                            <a href="#" className="btn btn-primary">Choisir</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Parking_image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Parking de la Rhonelle</h5>
                            <p className="card-text">Réputé pour être à proximité d'un des plus beaux musées de la ville.</p>
                            <a href="#" className="btn btn-primary">Choisir</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Parkings;
