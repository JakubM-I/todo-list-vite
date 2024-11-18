import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
  };

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: state => {
            state.isOpen = true;
        },

        closeModal: state => {
            state.isOpen = false;
        }
    }
        
});

export const modalStateSelctor = state => state.modal;
export const modalOpenSelector = state => modalStateSelctor(state).isOpen;
export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;