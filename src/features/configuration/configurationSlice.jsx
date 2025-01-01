import { createSlice } from "@reduxjs/toolkit";
import { loadConfigurationFromLocalStorage } from "../../utils/localStorage";

// const initialState = 

const configurationSlice = createSlice({
    name: "configuration",
    initialState: {
            sortType: loadConfigurationFromLocalStorage()?.sortType || "date",
            lang: "PL",
            loading: false,
            fetchError: false,
            isMobile: window.innerWidth <= 768,
            windowWidth: window.innerWidth,
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
        },

        errorFetchExampleData: state => {
            state.fetchError = true;
        },

        closeErrorFetchExampleData: state => {
            state.loading = false;
            state.fetchError = false;
        },

        setWindowSize: (state, {payload: windowWidth}) => {
            const width = windowWidth;
            state.windowWidth = width;
            state.isMobile = width <= 768;
        }

    }
});

export const configStateSelector = state => state.configuration;
export const configSortTypeSelector = state => configStateSelector(state).sortType;
export const configLoadingState = state => configStateSelector(state).loading;
export const configFetchErrorState = state => configStateSelector(state).fetchError;
export const configIsMobile = state => configStateSelector(state).isMobile;
export const configWindowWidth = state => configStateSelector(state).windowWidth;

export const {toggleSortType, fetchExampleData, successFetchExampeData, errorFetchExampleData, closeErrorFetchExampleData, setWindowSize} = configurationSlice.actions;
export default configurationSlice.reducer;