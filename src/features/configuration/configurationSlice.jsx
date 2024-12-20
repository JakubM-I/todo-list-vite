import { createSlice } from "@reduxjs/toolkit";
import { loadConfigurationFromLocalStorage } from "../../utils/localStorage";

// const initialState = 

const configurationSlice = createSlice({
    name: "configuration",
    initialState: {
            sortType: loadConfigurationFromLocalStorage()?.sortType || "date",
            lang: "PL",
            loading: false,
    },

    reducers: {
        toggleSortType: (state, {payload: sortType}) => {
            state.sortType = sortType;
        },

        fetchExampleData: state => {
            state.loading = true;
        },

        successFetchExampeData: state => {
            state.loading = false;
        }
    }
});

export const configStateSelector = state => state.configuration;
export const configSortTypeSelector = state => configStateSelector(state).sortType;
export const configLoadingState = state => configStateSelector(state).loading;

export const {toggleSortType, fetchExampleData, successFetchExampeData} = configurationSlice.actions;
export default configurationSlice.reducer;