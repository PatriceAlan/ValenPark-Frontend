import React from 'react';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Parking_image from '../../../assets/parking_image.jpg';

const Parkings = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='parkings'>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Parking_image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Parking de la Rhonelle</h5>
                            <p className="card-text">Réputé pour être à proximité d'un des plus beaux musées de la ville.</p>
                            <Button variant="primary" onClick={handleShow}>Choisir</Button>

                            <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Parking de la Rhonelle</Modal.Title>
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

            </div>

        </div>
    );
};

export default Parkings;