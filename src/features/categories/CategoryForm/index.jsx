import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory, editCategory } from "../categorySlice";
import { nanoid } from "@reduxjs/toolkit";

const CategoryForm = ({editedCategory = null}) => {
    const dispatch = useDispatch();
    const [categoryName, setCategoryName] = useState(editedCategory?.categoryName || "");
    const isEdit = !!editedCategory;

    const categorySubmit = (e) => {
        e.preventDefault();
        if(!categoryName.trim()){
            return;
        }
        
        if(isEdit) {
            dispatch(editCategory({
                categoryId: editedCategory.categoryId,
                categoryName: categoryName.trim(),
            }))

        } else {
            dispatch(addCategory({
                categoryId: nanoid(),
                categoryName: categoryName.trim(),
            }))
        }
        
    }

    return (
        <form 
            onSubmit={categorySubmit}
            className="flex flex-col gap-[10px]"
        >
            <input 
                className="border-b border-solid border-borderGray p-1 text-sm/[1.2] placeholder:text-secondaryText placeholder:text-sm" 
                type="text"
                placeholder="Nazwa kategorii" 
                value={categoryName}
                onChange={({target}) => setCategoryName(target.value)}
            />
            <div className="flex items-center justify-end">
                <button 
                    className="bg-primaryBlue rounded-lg border border-primaryBlue text-primaryLightColor text-[min(max(2.89vw,14px),17px)]/[1] py-2 px-3 transition-colors easy-in duration-700 hover:bg-primaryLightColor hover:text-primaryBlue"
                >
                   {isEdit ? "Zapis" : "Dodaj"}
                </button>
            </div>
        </form>
    )
};

export default CategoryForm;