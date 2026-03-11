import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createdTasksSelector, inWorkTasksSelector, readyTasksSelector } from "../../../stores/tasks/tasks-selectors";
import { TasksListColumn } from "./tasks-list-column";
import { TasksStates } from "../../../model/tasks";
import * as styles from './styles.module.scss';


export function TasksList() {
    const createdTasks = useSelector(createdTasksSelector);
    const inWorkTasks = useSelector(inWorkTasksSelector);
    const readyTasks = useSelector(readyTasksSelector);

    return (
        <Container className={ `${ styles.tasksList } flex-grow-1 mt-4 ${ styles.containerLg }` }>
            <div className={ `${ styles.tasksListContent } row g-4 h-100` }>
                <div className="col">
                    <TasksListColumn tasksType={ TasksStates.CREATED } items={ createdTasks }/>
                </div>
                <div className="col">
                    <TasksListColumn tasksType={ TasksStates.IN_WORK } items={ inWorkTasks }/>
                </div>
                <div className="col">
                    <TasksListColumn tasksType={ TasksStates.READY } items={ readyTasks }/>
                </div>
            </div>
        </Container>
    );
}
