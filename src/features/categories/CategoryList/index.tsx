import { BiTrash } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { categorySelector, deleteCategory } from "../categorySlice";
import { openModal } from "../../../common/PopupModal/modalSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { Category, CategoryHandleEdit } from "../../../types/interfaces";

const CategoryList: React.FC = () => {
    const categories: Category[] = useAppSelector(categorySelector);
    const dispatch = useAppDispatch();

    const handleEdit: CategoryHandleEdit = (category) => {
        dispatch(openModal({
            title: "Edytuj kategorię",
            body: "categoryForm",
            data: category,
        }))
    }

    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
            {[...categories]
                .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
                .map(category => (
                    <li key={category.categoryId} className="border border-borderGray p-2 flex justify-start items-center gap-2">
                        <h2 className="text-primaryTextColor text-base">{category.categoryName}</h2>
                        <div className="flex justify-center items-center gap-2 ml-auto mr-0">
                            <button
                                onClick={() => handleEdit(category)}
                                title="Edytuj"
                                className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                            >
                                <BiEditAlt />
                            </button>
                            <button
                                title="Usuń"
                                onClick={() => dispatch(deleteCategory(category.categoryId))}
                                className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                            >
                                <BiTrash />
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
};

export default CategoryList;