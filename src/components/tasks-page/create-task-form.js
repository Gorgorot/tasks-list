import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

export function CreateTaskForm({ onValidChange }) {
    const {
        register,
        formState: { errors, isValid },
        subscribe,
        trigger,
    } = useForm();

    useEffect(() => {
        subscribe({
            formState: { isValid: true },
            callback: ({ isValid }) => {
                onValidChange?.(isValid);
            },
        });
    });

    useEffect(() => {
        trigger();
    }, []);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Название</Form.Label>
                <input className="form-control" type="text" { ...register("name", { required: true }) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Описание</Form.Label>
                <textarea className="form-control" rows={ 4 } { ...register("description", { required: true }) } />
            </Form.Group>
        </Form>
    );
}
