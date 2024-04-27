import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Parking_image from '../../../assets/parking_image.jpg';

const Parkings = () => {
    const [parkings, setParkings] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchParkings();
    }, []);

    const fetchParkings = async () => {
        try {
            const response = await fetch('http://localhost:8082/parkings');
            const data = await response.json();
            setParkings(data);
        } catch (error) {
            console.error('Erreur dans le chargement de parkings:', error);
        }
    };

    return (
        <div className='parkings'>
            <div className="row">
            {parkings.map(parking => (
                <div className="col-md-4 mb-4" key={parking.idParking}>
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Parking_image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{parking.nomZoneParking}</h5>
                            <p className="card-text">{parking.adresseParking}</p>
                            <p className="card-text">Capacite du parking : {parking.capaciteParking}</p>
                            <Button variant="primary" onClick={handleShow}>reserver sa place</Button>

                            <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>{parking.nomZoneParking}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Id utilisateur</Form.Label>
                                        <Form.Control
                                            type="textinput" autoFocus/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Immatriculation du vehicule</Form.Label>
                                        <Form.Control
                                            type="textinput" autoFocus/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Date et heure de debut</Form.Label>
                                        <Form.Control
                                            type="textinput" autoFocus/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Date et heure de fin</Form.Label>
                                        <Form.Control
                                            type="textinput" autoFocus/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Place de parking</Form.Label>
                                        <Form.Control
                                            type="textinput" autoFocus/>
                                        </Form.Group>
                                    </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Fermer
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Enregistrer
                                    </Button>
                                    </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                </div>
))}
            </div>

        </div>
    );
};

export default Parkings;
