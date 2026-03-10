import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createdTasksSelector, inWorkTasksSelector, readyTasksSelector } from "../../stores/tasks/tasks-selectors";

export function TasksStatistic() {
    const createdTasks = useSelector(createdTasksSelector);
    const inWorkTasks = useSelector(inWorkTasksSelector);
    const readyTasks = useSelector(readyTasksSelector);

    return (
        <div className="d-flex gap-2">
            <Badge bg="success">Готово к работе { createdTasks.length }</Badge>
            <Badge bg="warning">В работе { inWorkTasks.length }</Badge>
            <Badge bg="dark">Выполнено { readyTasks.length }</Badge>
        </div>
    );
}
