import React from "react";
import { TasksPageNavbar } from "./tasks-page-navbar";
import { TasksControlPanel } from "./tasks-control-panel";
import { TasksList } from "./tasks-list/tasks-list";
import { Provider } from "react-redux";
import { tasksStore } from "../../stores/tasks-store";

export function TasksPage(props) {
    return (
        <React.Fragment>
            <Provider store={ tasksStore }>
                <TasksPageNavbar/>
                <TasksControlPanel/>
                <TasksList/>
            </Provider>
        </React.Fragment>
    );
}
