import { createSlice } from "@reduxjs/toolkit";
import { makeTask } from "../../model/tasks";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [
            makeTask('task', 'task'),
            makeTask('task', 'task'),
        ],
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = makeTask(action.payload.name, action.payload.description);

            state.items.push(newTask);
        },
        removeTask: (state, action) => {

        }
    },
});

export const { addTask, removeTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
