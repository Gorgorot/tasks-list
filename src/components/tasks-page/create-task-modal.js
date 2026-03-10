import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

export function CreateTaskModal({ showed, onAccept, onCancel }) {
    return (
        <Modal show={ showed } centered>
            <Modal.Header closeButton>
                <Modal.Title>Новая задача</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" onClick={ onAccept }>Создать</Button>
                <Button variant="danger" onClick={ onCancel }>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}