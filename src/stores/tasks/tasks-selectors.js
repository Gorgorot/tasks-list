import { createSelector } from "@reduxjs/toolkit";
import { TasksStates } from "../../model/tasks";

export const createdTasksSelector = createSelector(
    state => state.tasks.items,
        items => items.filter(task => task.state === TasksStates.CREATED)
);
export const inWorkTasksSelector = createSelector(
    state => state.tasks.items,
    items => items.filter(task => task.state === TasksStates.IN_WORK)
);
export const readyTasksSelector = createSelector(
    state => state.tasks.items,
    items => items.filter(task => task.state === TasksStates.READY)
);
