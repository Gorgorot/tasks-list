import React from "react";
import { TasksPageNavbar } from "./tasks-page-navbar";
import { TasksControlPanel } from "./tasks-control-panel";
import { TasksList } from "./tasks-list";

export function TasksPage(props) {
    return (
        <React.Fragment>
            <TasksPageNavbar/>
            <TasksControlPanel/>
            <TasksList/>
        </React.Fragment>
    );
}
