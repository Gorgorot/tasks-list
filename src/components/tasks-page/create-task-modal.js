import React, { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

export function CreateTaskModal({ showed, onAccept, onCancel }) {
    const {
        register,
        formState: { isValid },
        trigger,
        getValues,
        reset,
    } = useForm();
    const onAcceptButtonClick = () => {
        onAccept(getValues());
        reset();
    }
    const onCancelButtonClick = () => {
        reset();
        onCancel();
    }

    useEffect(() => {
        trigger();
    }, []);

    return (
        <Modal show={ showed } centered onHide={ onCancelButtonClick }>
            <Modal.Header closeButton>
                <Modal.Title>Новая задача</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Название</Form.Label>
                        <input className="form-control" type="text" { ...register("name", { required: true }) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Описание</Form.Label>
                        <textarea className="form-control"
                                  rows={ 4 } { ...register("description", { required: true }) } />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" disabled={ !isValid } onClick={ onAcceptButtonClick }>Создать</Button>
                <Button variant="danger" onClick={ onCancelButtonClick }>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}
