import { createSlice } from "@reduxjs/toolkit";
import { loadConfigurationFromLocalStorage } from "../../utils/localStorage";

const savedConfig = loadConfigurationFromLocalStorage()

const configurationSlice = createSlice({
    name: "configuration",
    initialState: {
        sortType: savedConfig?.sortType || "date",
        lang: savedConfig?.lang || "PL",
        loading: savedConfig?.loading || false,
        fetchError: savedConfig?.fetchError || false,
    },

    reducers: {
        toggleSortType: (state, { payload: sortType }) => {
            state.sortType = sortType;
        },

        fetchExampleData: state => {
            state.loading = true;
        },

        successFetchExampeData: state => {
            state.loading = false;
        },

        errorFetchExampleData: state => {
            state.fetchError = true;
        },

        closeErrorFetchExampleData: state => {
            state.loading = false;
            state.fetchError = false;
        },

    }
});

export const configStateSelector = state => state.configuration;
export const configSortTypeSelector = state => configStateSelector(state).sortType;
export const configLoadingState = state => configStateSelector(state).loading;
export const configFetchErrorState = state => configStateSelector(state).fetchError;

export const { toggleSortType, fetchExampleData, successFetchExampeData, errorFetchExampleData, closeErrorFetchExampleData } = configurationSlice.actions;
export default configurationSlice.reducer;