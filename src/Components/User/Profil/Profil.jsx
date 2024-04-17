import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';

const Profil = () => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleClosePaiementModal = () => setShowPaiementModal(false);
    const handleShowPaiementModal = () => setShowPaiementModal(true);

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
            <Button variant='warning' onClick={handleShowEditModal} className='profil-modifier'>Modifier</Button>
                        <Modal show={showEditModal} onHide={handleCloseEditModal}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modifier le paiement</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Prenom</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="textinput" autoFocus/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mot de passe</Form.Label>
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
                        
                        <Button variant='danger' onClick={handleShowDeleteModal} className='profil-supprimer'>Supprimer</Button>
                        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                            <Modal.Header closeButton>
                            <Modal.Title>Suppression de compte</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <p>Êtes-vous sûr de vouloir supprimer votre compte ?</p>
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
    );
};

export default Profil;
