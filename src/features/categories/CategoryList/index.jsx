import { BiTrash } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { categorySelector, categoryStateSelector, deleteCategory, editCategory } from "../categorySlice";
import { openModal } from "../../../common/PopupModal/modalSlice";

const CategoryList = () => {
    const categories = useSelector(categorySelector);
    const dispatch = useDispatch();
    const openElement = {
        title: "Edytuj kategorię",
        body: "categoryForm",
    }

    const handleEdit = (category) => {
        dispatch(openModal({
            title: "Edytuj kategorię",
            body: "categoryForm",
            data: category,
        }))
    }
    
    return (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
            {categories.map(category => (
                            <li key={category.categoryId} className="border border-borderGray p-2 flex justify-start items-center gap-2">
                            <h2 className="text-primaryTextColor text-base">{category.categoryName}</h2>
                            <div className="flex justify-center items-center gap-2 ml-auto mr-0">
                                <button 
                                    title="Edytuj"
                                    className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                                >
                                    <BiEditAlt
                                        onClick={() => handleEdit(category)}
                                    />
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
            ))}
            {/* <li className="border border-borderGray p-2 flex justify-start items-center gap-2">
                <h2 className="text-primaryTextColor text-base">Osobiste</h2>
                <div className="flex justify-center items-center gap-2 ml-auto mr-0">
                    <button 
                        title="Edytuj"
                        className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                    >
                        <BiEditAlt />
                    </button>
                    <button
                        title="Usuń"
                        className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                    >
                        <BiTrash />
                    </button>
                </div>
            </li>
            <li className="border border-borderGray p-2 flex justify-start items-center gap-2">
                <h2 className="text-primaryTextColor text-base">Praca</h2>
                <div className="flex justify-center items-center gap-2 ml-auto mr-0">
                    <button
                        title="Edytuj"
                        className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                    >
                        <BiEditAlt />
                    </button>
                    <button
                        title="Usuń"
                        className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                    >
                        <BiTrash />
                    </button>
                </div>
            </li>
            <li className="border border-borderGray p-2 flex justify-start items-center gap-2">
                <h2 className="text-primaryTextColor text-base">Domowe</h2>
                <div className="flex justify-center items-center gap-2 ml-auto mr-0">
                    <button
                        title="Edytuj"
                        className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                    >
                        <BiEditAlt />
                    </button>
                    <button
                        title="Usuń"
                        className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                    >
                        <BiTrash />
                    </button>
                </div>
            </li>
            <li className="border border-borderGray p-2 flex justify-start items-center gap-2">
                <h2 className="text-primaryTextColor text-base">Wakacje</h2>
                <div className="flex justify-center items-center gap-2 ml-auto mr-0">
                    <button
                        title="Edytuj"
                        className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                    >
                        <BiEditAlt />
                    </button>
                    <button
                        title="Usuń"
                        className="p-[3px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                    >
                        <BiTrash />
                    </button>
                </div>
            </li> */}
        </ul>
    )
};

export default CategoryList;