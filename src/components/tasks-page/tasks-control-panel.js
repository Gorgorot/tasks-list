import React from "react";
import { Button, Container } from "react-bootstrap";
import { TasksStatistic } from "./tasks-statistic";
import { CreateTaskModal } from "./create-task-modal";

export function TasksControlPanel() {
    const [displayModal, setDisplayModal] = React.useState(false);

    const changeModalState = (value) => setDisplayModal(value);
    const openModal = () => changeModalState(true);
    const closeModal = () => changeModalState(false);

    return (
        <Container fluid className="bg-body-secondary border-bottom border-top py-2 px-4">
            <div className="d-flex flex-row align-items-center justify-content-between">
                <TasksStatistic/>
                <Button color="primary" size="sm" onClick={ openModal }>Добавить</Button>
            </div>

            <CreateTaskModal showed={ displayModal} onAccept={ closeModal } onCancel={ closeModal } />
        </Container>
    );
}
