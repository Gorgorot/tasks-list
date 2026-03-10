import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks-slice";

export const tasksStore = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
});
