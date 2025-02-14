import { useEffect, useRef, useState } from "react";
import { addCategory, editCategory } from "../categorySlice";
import { nanoid } from "@reduxjs/toolkit";
import { closingModal } from "../../../common/PopupModal/modalSlice";
import PrimaryButton from "../../../common/PrimaryButton";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { CategoryFormProps } from "../../../types/interfaces";

const CategoryForm: React.FC<CategoryFormProps> = ({ editedCategory = null }) => {
    const dispatch = useAppDispatch();
    const [categoryName, setCategoryName] = useState(editedCategory?.categoryName || "");
    const isEdit = !!editedCategory;
    const categoryNameRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        categoryNameRef.current.focus()
    }, [])

    const categorySubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!categoryName.trim()) {
            return;
        }

        if (isEdit) {
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
        dispatch(closingModal());
    }

    return (
        <form
            onSubmit={categorySubmit}
            className="flex flex-col gap-[10px]"
        >
            <input
                className="border-b border-solid border-borderGray p-1 text-sm/[1.2] placeholder:text-secondaryText placeholder:text-sm focus-visible outline-none"
                type="text"
                placeholder="Nazwa kategorii"
                ref={categoryNameRef}
                value={categoryName}
                onChange={({ target }) => setCategoryName(target.value)}
            />
            <div className="flex items-center justify-end">
                <PrimaryButton
                    title={isEdit ? "Zapisz" : "Dodaj"}
                />
            </div>
        </form>
    )
};

export default CategoryForm;