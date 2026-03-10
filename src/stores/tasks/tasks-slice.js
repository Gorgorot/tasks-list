import { createSlice } from "@reduxjs/toolkit";
import { TasksStates } from "../../model/tasks";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [
            {
                id: 1,
                name: "Task 1",
                description: "Task 1",
                state: TasksStates.CREATED,
            },
            {
                id: 2,
                name: "Task 2",
                description: "Task 2",
                state: TasksStates.IN_WORK,
            }
        ],
    },
    reducers: {
        addTask: (state, action) => {

        },
        removeTask: (state, action) => {

        }
    },
});

export const { addTask, removeTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;