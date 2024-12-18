import { createSlice } from "@reduxjs/toolkit";
import { loadConfigurationFromLocalStorage } from "../../utils/localStorage";

// const initialState = 

const configurationSlice = createSlice({
    name: "configuration",
    initialState: {
            sortType: loadConfigurationFromLocalStorage()?.sortType || "date",
            lang: "PL",
    },

    reducers: {
        toggleSortType: (state, {payload: sortType}) => {
            state.sortType = sortType;
        },
    }
});

export const configStateSelector = state => state.configuration;
export const configSortTypeSelector = state => configStateSelector(state).sortType;

export const {toggleSortType} = configurationSlice.actions;
export default configurationSlice.reducer;