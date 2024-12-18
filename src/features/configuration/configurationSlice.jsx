import { createSlice } from "@reduxjs/toolkit";

// const initialState = 

const configurationSlice = createSlice({
    name: "configuration",
    initialState: {
            sortType: "date",
    },

    reducers: {
        toggleSortType: (state, {payload: sortType}) => {
            state.sortType = sortType;
        },
    }
});

export const configurationStateSelector = state => state.configuration;
export const configurationSortTypeSelector = state => configurationStateSelector(state).sortType;

export const {toggleSortType} = configurationSlice.actions;
export default configurationSlice.reducer;