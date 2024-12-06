import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../categorySlice";
import { nanoid } from "@reduxjs/toolkit";

const AddCategoryForm = () => {
    const dispatch = useDispatch();
    const [categoryName, setCategoryName] = useState();

    const categorySubmit = (e) => {
        e.preventDefault();
        if(!categoryName.trim()){
            return;
        }

        dispatch(addCategory({
            categoryId: nanoid(),
            categoryName: categoryName.trim(),
        }))
    }

    return (
        <form 
            onSubmit={categorySubmit}
            className="flex flex-col gap-[10px]"
        >
            <input 
                className="border-b border-solid border-borderGray p-1 text-sm/[1.2] placeholder:text-secondaryText placeholder:text-sm" 
                type="text" 
                value={categoryName}
                onChange={({target}) => setCategoryName(target.value)}
            />
            <button>Zapisz</button>
        </form>
    )
};

export default AddCategoryForm;