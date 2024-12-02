import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "categoryList",
    initialState: {
        categories: [],
    },
    reducers: {
        addCategory: ({categories}, {payload: newCategory}) => {
            categories.push(newCategory);
        },

        deleteCategory: ({categories}, {payload: categoryId}) => {
            const categroyIndex = categories.findIndex(category => category.categoryId === categoryId);
            categories.slice(categroyIndex, 0);
        }
    },


});

export const categoryStateSelector = state => state.categories;
export const categoryState = state => categoryStateSelector(state).categories

export const {addCategory, deleteCategory} = categorySlice.actions;
export default categorySlice.reducer;