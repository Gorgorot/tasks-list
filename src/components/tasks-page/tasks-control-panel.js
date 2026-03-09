import React from "react";
import { Button, Container } from "react-bootstrap";
import { TasksStatistic } from "./tasks-statistic";

export function TasksControlPanel() {
    return (
        <Container fluid className="bg-body-secondary border-bottom border-top py-2 px-4">
            <div className="d-flex flex-row align-items-center justify-content-between">
                <TasksStatistic/>
                <Button color="primary" size="sm">Добавить</Button>
            </div>
        </Container>
    );
}
