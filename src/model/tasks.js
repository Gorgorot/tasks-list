import { v4 as uuidv4 } from 'uuid';

export const TasksStates = {
    'CREATED': 'created',
    'IN_WORK': 'in_work',
    'READY': 'ready',
};

export const TasksNamesMap = {
    [TasksStates.CREATED]: 'Готово к работе',
    [TasksStates.IN_WORK]: 'В работе',
    [TasksStates.READY]: 'Выполнено'
};

export function makeTask(name, description) {
    return {
        name,
        description,
        id: uuidv4(),
        state: TasksStates.CREATED,
        createdAt: new Date().toLocaleString('ru-Ru', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: '2-digit',
            minute: '2-digit',
        }),
    };
}
