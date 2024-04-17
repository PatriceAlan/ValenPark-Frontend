import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import './Reservations.css';

const Reservations = () => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

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
                                <p className="card-text"><strong>Place de parking :</strong> 1</p>
                                <p className="card-text"><strong>Date de reservation :</strong> 01/01/2022</p>
                                <p className="card-text"><strong>Heure de debut :</strong> 12:00</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="card-text"><strong>Durée :</strong> 1h</p>
                                <p className="card-text"><strong>Prix :</strong> 1€</p>
                                
                                <p className="card-text"><strong>Heure de fin :</strong> 13:00</p>
                            </div>
                            <div className="card-footer text-right">
                        
                        <Button variant='warning' onClick={handleShowEditModal} className='reservation-modifier'>Modifier</Button>
                        <Modal show={showEditModal} onHide={handleCloseEditModal}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modifier la reservation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Place de parking</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date de reservation</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Heure de debut</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Prix</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Heure de fin</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEditModal}>
                                Fermer
                            </Button>
                            <Button variant="primary" onClick={handleCloseEditModal}>
                                Enregistrer
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        
                        <Button variant='danger' onClick={handleShowDeleteModal} className='reservation-supprimer'>Supprimer</Button>
                        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Supprimer la reservation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <p>Voulez-vous vraiment supprimer cette reservation ?</p>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDeleteModal}>
                                Annuler
                            </Button>
                            <Button variant="danger" onClick={handleCloseDeleteModal}>
                                Supprimer
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Reservations;
