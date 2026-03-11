import { v4 as uuidv4 } from 'uuid';

export const TasksStates = {
    'CREATED': 'created',
    'IN_WORK': 'in_work',
    'READY': 'ready',
};

export const TasksNamesMap = {
    [TasksStates.CREATED]: 'Запланировано',
    [TasksStates.IN_WORK]: 'В работе',
    [TasksStates.READY]: 'Выполнено'
};

export const TasksColorsMap = {
    [TasksStates.CREATED]: '#198754',
    [TasksStates.IN_WORK]: '#ffc107',
    [TasksStates.READY]: '#212529'
};

export function makeTask(name, description, state = TasksStates.CREATED) {
    return {
        name,
        description,
        state,
        id: uuidv4(),
        createdAt: new Date().toLocaleString('ru-Ru', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: '2-digit',
            minute: '2-digit',
        }),
    };
}
