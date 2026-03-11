import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/tasks-slice";
import { statesReducer } from "./states/states-slice";

export const tasksStore = configureStore({
    reducer: {
        tasks: tasksReducer,
        states: statesReducer,
    },
});
