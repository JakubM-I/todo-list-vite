import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasksList",
    initialState: {
        tasks: [
            {
                id: 1,
                taskName: "Zadanie 1",
                taskPriority: 0,
                taskDone: false,
                taskVisibility: true,
            },
            {
                id: 2,
                taskName: "Zadanie 2",
                taskPriority: 3,
                taskDone: true,
                taskVisibility: true,
            },
            {
                id: 3,
                taskName: "Zadanie 3",
                taskPriority: 2,
                taskDone: false,
                taskVisibility: true,
            }
        ]
    },
    reducers: {
        toggleTaskDone: (state, {payload: taskId}) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks[index].taskDone = !state.tasks[index].taskDone;
        }
    }
});

export const taskSelector = state => state.tasks;
// export const taskSelector = state => taskStateSelector(state).tasks;
export const {toggleTaskDone} = taskSlice.actions;
export default taskSlice.reducer;