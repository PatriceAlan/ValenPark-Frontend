import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import React from 'react';
import './Paiements.css';

const Paiements = () => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showPaiementModal, setShowPaiementModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleClosePaiementModal = () => setShowPaiementModal(false);
    const handleShowPaiementModal = () => setShowPaiementModal(true);

    return (
        <div className='user-paiements'>
            <h1>Paiements</h1>
            <div className='reservations-reserver'>
            <Button variant="primary" onClick={handleShowPaiementModal}>Effectuer un nouveau paiement</Button>

<Modal show={showPaiementModal} onHide={handleClosePaiementModal}>
        <Modal.Header closeButton>
        <Modal.Title>Paiement de la reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Id reservation</Form.Label>
            <Form.Control
                type="textinput" autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Montant du paiement</Form.Label>
            <Form.Control
                type="textinput" autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date et heure du paiement</Form.Label>
            <Form.Control
                type="textinput" autoFocus/>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClosePaiementModal}>
            Fermer
        </Button>
        <Button variant="primary" onClick={handleClosePaiementModal}>
            Enregistrer
        </Button>
        </Modal.Footer>
</Modal>
            </div>
            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="card-text"><strong>Id Reservation :</strong> 1</p>
                                <p className="card-text"><strong>Montant :</strong> 12 euros </p>
                                <p className="card-text"><strong>Date et heure de paiement :</strong> 01/01/2022 13h00</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card-footer text-right">
                        <Button variant='warning' onClick={handleShowEditModal} className='paiement-modifier'>Modifier</Button>
                        <Modal show={showEditModal} onHide={handleCloseEditModal}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modifier le paiement</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Id reservation</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Montant du paiement</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date et heure du paiement</Form.Label>
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
                        
                        <Button variant='danger' onClick={handleShowDeleteModal} className='paiement-supprimer'>Supprimer</Button>
                        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                            <Modal.Header closeButton>
                            <Modal.Title>Supprimer le paiement</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <p>Êtes-vous sûr de vouloir supprimer ce paiement ?</p>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDeleteModal}>
                                Annuler
                            </Button>
                            <Button variant="primary" onClick={handleCloseDeleteModal}>
                                Supprimer
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
      
            </div>

        </div>
    );
};

export default Paiements;
