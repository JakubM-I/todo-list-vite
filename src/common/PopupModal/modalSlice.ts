import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenElementProps } from "../../types/interfaces";
import { RootState } from "../../store";

interface ModalState {
    isOpen: boolean,
    openElement: OpenElementProps | {},
    isLoading: boolean,
    isSuccess: boolean,
};

const initialState: ModalState = {
    isOpen: false,
    openElement: {},
    isLoading: false,
    isSuccess: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state: ModalState, { payload }: PayloadAction<OpenElementProps>) => {
            state.isOpen = true;
            state.openElement = { ...payload };
        },

        closingModal: (state: ModalState) => {
            state.isLoading = true;
        },

        successModal: (state: ModalState) => {
            state.isLoading = false;
            state.isSuccess = true;
        },

        closeModal: (state: ModalState) => {
            state.isOpen = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.openElement = {};
        }
    }
});

export const modalStateSelctor = (state: RootState) => state.modal;
export const modalOpenSelector = (state: RootState) => modalStateSelctor(state).isOpen;
export const modalOpenElementSelector = (state: RootState) => modalStateSelctor(state).openElement;
export const modalOpenLoadingSelector = (state: RootState) => modalStateSelctor(state).isLoading;
export const modalOpenSuccessSelector = (state: RootState) => modalStateSelctor(state).isSuccess;

export const { openModal, closingModal, successModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;