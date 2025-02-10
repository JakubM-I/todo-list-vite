import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    openElement: {},
    isLoading: false,
    isSuccess: false,
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

        successModal: state => {
            state.isLoading = false;
            state.isSuccess = true;
        },

        closeModal: state => {
            state.isOpen = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.openElement = {};
        }
    }

});

export const modalStateSelctor = state => state.modal;
export const modalOpenSelector = state => modalStateSelctor(state).isOpen;
export const modalOpenElementSelector = state => modalStateSelctor(state).openElement;
export const modalOpenLoadingSelector = state => modalStateSelctor(state).isLoading;
export const modalOpenSuccessSelector = state => modalStateSelctor(state).isSuccess;

export const { openModal, closingModal, successModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;