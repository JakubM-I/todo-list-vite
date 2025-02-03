import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    openElement: {},
    isLoading: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload: openElement }) => {
            state.isOpen = true;
            state.openElement = { ...openElement };
        },

        closingModal: state => {
            state.isLoading = true;
        },

        closeModal: state => {
            state.isOpen = false;
            state.isLoading = false;
            state.openElement = {};
        }
    }

});

export const modalStateSelctor = state => state.modal;
export const modalOpenSelector = state => modalStateSelctor(state).isOpen;
export const modalOpenElementSelector = state => modalStateSelctor(state).openElement;
export const modalOpenLoadingSelector = state => modalStateSelctor(state).isLoading;

export const { openModal, closingModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;