import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadCategoryFromLocalStorage } from "../../utils/localStorage";
import { Category } from "../../types/interfaces";
import { RootState } from "../../store";

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: loadCategoryFromLocalStorage(),
}

const categorySlice = createSlice({
    name: "categoryList",
    initialState,
    reducers: {
        addCategory: ({ categories }: CategoryState, { payload }: PayloadAction<Category>) => {
            categories.push(payload);
        },

        deleteCategory: ({ categories }: CategoryState, { payload }: PayloadAction<string>) => {
            const categoryIndex = categories.findIndex(category => category.categoryId === payload);
            categories.splice(categoryIndex, 1);
        },

        editCategory: ({ categories }: CategoryState, { payload }: PayloadAction<Category>) => {
            const index = categories.findIndex(category => category.categoryId === payload.categoryId);
            categories[index] = { ...categories[index], categoryName: payload.categoryName }
        },

        loadExampleCategories: (state: CategoryState, { payload }: PayloadAction<Category[]>) => {
            state.categories = payload;
        },
    },

});

export const categoryStateSelector = (state: RootState) => state.categories;
export const categorySelector = (state: RootState) => categoryStateSelector(state).categories;

export const { addCategory, deleteCategory, editCategory, loadExampleCategories } = categorySlice.actions;
export default categorySlice.reducer;