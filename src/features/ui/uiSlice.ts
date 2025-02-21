import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UiState {
    isMobile: boolean;
    windowWidth: number;
}

const initialState: UiState = {
    isMobile: window.innerWidth <= 768,
    windowWidth: window.innerWidth,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setWindowSize: (state, { payload }: PayloadAction<number>) => {
            const width = payload;
            state.windowWidth = width;
            state.isMobile = width <= 768;
        }
    }
})

export const uiStateSelector = (state: RootState) => state.ui;
export const uiIsMobile = (state: RootState) => uiStateSelector(state).isMobile;
export const uiWindowWidth = (state: RootState) => uiStateSelector(state).windowWidth;

export const { setWindowSize } = uiSlice.actions;
export default uiSlice.reducer;