import { useDispatch } from "react-redux";
import { openAddForm } from "../taskSlice";

const AddMenu = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button className="bg-primaryBlue rounded-lg border border-primaryBlue text-primaryLightColor text-[min(max(2.89vw,14px),17px)]/[1] py-2 px-3 transition-colors easy-in duration-700 hover:bg-primaryLightColor hover:text-primaryBlue"
            onClick={() => dispatch(openAddForm())}
            >
                Dodaj zadanie
            </button>
        </div>
    )
}

export default AddMenu;