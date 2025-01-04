import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isMobile: window.innerWidth <= 768,
        windowWidth: window.innerWidth,
    },
    reducers: {
        setWindowSize: (state, {payload: windowWidth}) => {
            const width = windowWidth;
            state.windowWidth = width;
            state.isMobile = width <= 768;
        }
    }
})

export const uiStateSelector = state => state.ui;
export const uiIsMobile = state => uiStateSelector(state).isMobile;
export const uiWindowWidth = state => uiStateSelector(state).windowWidth;

export const {setWindowSize} = uiSlice.actions;
export default uiSlice.reducer;