import React from "react";
import { Button, Container } from "react-bootstrap";
import { TasksStatistic } from "./tasks-statistic";
import { CreateTaskModal } from "./create-task-modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../stores/tasks/tasks-slice";

export function TasksControlPanel() {
    const [displayModal, setDisplayModal] = React.useState(false);
    const dispatch = useDispatch();

    const changeModalState = (value) => setDisplayModal(value);
    const openModal = () => changeModalState(true);
    const closeModal = () => changeModalState(false);
    const onModalAccept = (formValue) => {
        dispatch(addTask(formValue));
        closeModal();
    }

    return (
        <Container fluid className="bg-body-secondary border-bottom border-top py-2 px-4">
            <div className="d-flex flex-row align-items-center justify-content-between">
                <TasksStatistic/>
                <Button color="primary" size="sm" onClick={ openModal }>Добавить</Button>
            </div>

            <CreateTaskModal showed={ displayModal } onAccept={ onModalAccept } onCancel={ closeModal }/>
        </Container>
    );
}
