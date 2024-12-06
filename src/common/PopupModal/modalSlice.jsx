import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    openElement: {},
  };

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, {payload: openElement}) => {
            state.isOpen = true;
            state.openElement = {...openElement};
        },

        closeModal: state => {
            state.isOpen = false;
            state.openElement = {};
        }
    }
        
});

export const modalStateSelctor = state => state.modal;
export const modalOpenSelector = state => modalStateSelctor(state).isOpen;
export const modalOpenElementSelector = state => modalStateSelctor(state).openElement;
export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;