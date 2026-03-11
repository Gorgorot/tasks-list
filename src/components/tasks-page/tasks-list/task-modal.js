import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { TasksNamesMap, TasksStates } from "../../../model/tasks";

export function TaskModal({ task, showed, onAccept, onCancel, isEditable }) {
    const {
        register,
        formState: { isValid, isDirty },
        getValues,
    } = useForm();

    const selectOptions = Object.entries(TasksStates).map(([, value]) => ({ value, label: TasksNamesMap[value] }));
    const onSave = () => onAccept(task.id, getValues('description'), getValues('state'))

    return (
        <Modal show={ showed } centered onHide={ onCancel }>
            <Modal.Header closeButton>
                <Modal.Title>{ task.name }</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <dl className="row">
                        <dt className="col-sm-3">Id</dt>
                        <dd className="col-sm-9">{ task.id }</dd>

                        <dt className="col-sm-3">Создана</dt>
                        <dd className="col-sm-9">{ task.createdAt }</dd>
                    </dl>
                    <Form.Group className="mb-3">
                        <Form.Label>Статус</Form.Label>
                        <select className="form-select" { ...register('state', {
                            value: task.state,
                            disabled: !isEditable
                        }) }>
                            {
                                selectOptions.map(
                                    (option) => (
                                        <option key={ option.value } value={ option.value }>{ option.label }</option>
                                    )
                                )
                            }
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Описание</Form.Label>
                        <textarea className="form-control"
                                  rows="4"
                                  { ...register('description', {
                                      required: true,
                                      value: task.description,
                                      disabled: !isEditable
                                  }) }>
                        </textarea>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                { isEditable &&
                    <Button variant="success" disabled={ !isValid && isDirty } onClick={ onSave }>Сохранить</Button> }
                <Button variant="danger" onClick={ onCancel }>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}
