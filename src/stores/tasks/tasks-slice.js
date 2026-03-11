import { createSlice } from "@reduxjs/toolkit";
import { makeTask, TasksStates } from "../../model/tasks";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [
            makeTask('task', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'),
            makeTask('task', 'task'),
            makeTask('task', 'task'),
            makeTask('task', 'task'),
            makeTask('task', 'task'),
            makeTask('task', 'task', TasksStates.IN_WORK),
            makeTask('task', 'task', TasksStates.IN_WORK),
            makeTask('task', 'task', TasksStates.IN_WORK),
            makeTask('task', 'task', TasksStates.READY),
            makeTask('task', 'task', TasksStates.READY),
            makeTask('task', 'task', TasksStates.READY),
        ],
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = makeTask(action.payload.name, action.payload.description);

            state.items.push(newTask);
        },
        removeTask: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);

            if (index === -1) {
                return;
            }

            state.items.splice(index, 1);
        },
        updateDescription: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index === -1) {
                return;
            }

            state.items[index].description = action.payload.description;
        },
        updateState: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index === -1) {
                return;
            }

            state.items[index].state = action.payload.state;
        }
    },
});

export const {
    addTask,
    removeTask,
    updateDescription,
    updateState,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
