import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadConfigurationFromLocalStorage } from "../../utils/localStorage";
import { RootState } from "../../store";
import { Configuration } from "../../types/interfaces";

const savedConfig: Configuration = loadConfigurationFromLocalStorage()

interface ConfigurationState {
    sortType: "date" | "category";
    lang: string;
    loading: boolean;
    fetchError: boolean;
}

const initialState: ConfigurationState = {
    sortType: savedConfig?.sortType || "date",
    lang: savedConfig?.lang || "PL",
    loading: savedConfig?.loading || false,
    fetchError: savedConfig?.fetchError || false,
}

const configurationSlice = createSlice({
    name: "configuration",
    initialState,

    reducers: {
        toggleSortType: (state: ConfigurationState, { payload }: PayloadAction<"date" | "category">) => {
            state.sortType = payload;
        },

        fetchExampleData: (state: ConfigurationState) => {
            state.loading = true;
        },

        successFetchExampeData: (state: ConfigurationState) => {
            state.loading = false;
        },

        errorFetchExampleData: (state: ConfigurationState) => {
            state.fetchError = true;
        },

        closeErrorFetchExampleData: (state: ConfigurationState) => {
            state.loading = false;
            state.fetchError = false;
        },
    }
});

export const configStateSelector = (state: RootState) => state.configuration;
export const configSortTypeSelector = (state: RootState) => configStateSelector(state).sortType;
export const configLoadingState = (state: RootState) => configStateSelector(state).loading;
export const configFetchErrorState = (state: RootState) => configStateSelector(state).fetchError;

export const { toggleSortType, fetchExampleData, successFetchExampeData, errorFetchExampleData, closeErrorFetchExampleData } = configurationSlice.actions;
export default configurationSlice.reducer;