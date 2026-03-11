import { createSlice } from "@reduxjs/toolkit";
import { TasksColorsMap, TasksNamesMap, TasksStates } from "../../model/tasks";

const initialState = {
    items: [
        {
            value: TasksStates.CREATED,
            order: 1,
            name: TasksNamesMap[TasksStates.CREATED],
            color: TasksColorsMap[TasksStates.CREATED],
        },
        {
            value: TasksStates.IN_WORK,
            order: 2,
            name: TasksNamesMap[TasksStates.IN_WORK],
            color: TasksColorsMap[TasksStates.IN_WORK],
        },
        {
            value: TasksStates.READY,
            order: 3,
            name: TasksNamesMap[TasksStates.READY],
            color: TasksColorsMap[TasksStates.READY],
        }
    ]
}

export const statesSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {
        addState: (state, action) => {
            state.items.push(action.payload);
        },
        removeState: (state, action) => {
            const index = state.items.findIndex((item) => item.value === action.payload);

            if (index !== -1) {
                return;
            }

            state.items.splice(index, 1);
        }
    },
    selectors: {
        sortedStates: state => state.items.slice(0).sort((a, b) => a.order - b.order),
    }
});

export const { addState, removeState } = statesSlice.actions;

export const statesReducer = statesSlice.reducer;
export const { sortedStates } = statesSlice.selectors;
