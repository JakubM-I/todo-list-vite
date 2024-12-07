import { createSlice } from "@reduxjs/toolkit";
import { loadCategoryFromLocalStorage } from "../../utils/localStorage";

const categorySlice = createSlice({
    name: "categoryList",
    initialState: {
        categories: loadCategoryFromLocalStorage(),
    },
    reducers: {
        addCategory: ({categories}, {payload: newCategory}) => {
            categories.push(newCategory);
        },

        deleteCategory: ({categories}, {payload: categoryId}) => {
            const categoryIndex = categories.findIndex(category => category.categoryId === categoryId);
            categories.splice(categoryIndex, 1);
        },

        editCategory: ({categories}, {payload}) => {
            const index = categories.findIndex(category => category.categoryId === payload.categoryId);
            categories[index] = {...categories[index], categoryName: payload.categoryName}
        }
    },


});

export const categoryStateSelector = state => state.categories;
export const categorySelector = state => categoryStateSelector(state).categories;

export const {addCategory, deleteCategory, editCategory} = categorySlice.actions;
export default categorySlice.reducer;