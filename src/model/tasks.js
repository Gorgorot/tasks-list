import { createSelector } from "@reduxjs/toolkit";

export const TasksStates = {
    'CREATED': 'created',
    'IN_WORK': 'in_work',
    'READY': 'ready',
};

export const TasksNamesMap = {
    [TasksStates.CREATED]: 'Создано',
    [TasksStates.IN_WORK]: 'В работе',
    [TasksStates.READY]: 'Готово'
};
