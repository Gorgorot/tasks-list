import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { createdTasksSelector, inWorkTasksSelector, readyTasksSelector } from "../../stores/tasks/tasks-selectors";
import { TasksListColumn } from "./tasks-list-column";
import { TasksStates } from "../../model/tasks";

export function TasksList() {
    const createdTasks = useSelector(createdTasksSelector);
    const inWorkTasks = useSelector(inWorkTasksSelector);
    const readyTasks = useSelector(readyTasksSelector);

    return (
        <Container className="flex-grow-1 mt-4" fluid>
            <TasksListColumn tasksType={ TasksStates.CREATED } items={ createdTasks } />
            <TasksListColumn tasksType={ TasksStates.IN_WORK } items={ inWorkTasks } />
            <TasksListColumn tasksType={ TasksStates.READY } items={ readyTasks } />
        </Container>
    );
}
