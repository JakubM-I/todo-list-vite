import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasksList",
    initialState: {
        tasks: []
    },
    reducers: {

    }
});

export const taskSelector = state => state.tasksList.tasks;
export const {} = taskSlice.actions;
export default taskSlice.reducer;