import { useDispatch } from "react-redux";
import { openModal } from "../../../common/PopupModal/modalSlice";
import AddButton from "../../../common/AddButton";
import AddTaskForm from "../AddForm";

const AddMenu = () => {
    const dispatch = useDispatch();
    const openElement = {
        title: "Nowe zadanie",
        body: "taskForm",
    }

    // {title: "Nowe zadanie", body: "taskForm"}

    return (
        <div>
            <AddButton 
                title="Dodaj zadanie"
                onClick={() => dispatch(openModal(openElement))}
            />
            {/* <button className="bg-primaryBlue rounded-lg border border-primaryBlue text-primaryLightColor text-[min(max(2.89vw,14px),17px)]/[1] py-2 px-3 transition-colors easy-in duration-700 hover:bg-primaryLightColor hover:text-primaryBlue"
            onClick={() => dispatch(openModal())}
            >
                Dodaj zadanie
            </button> */}
        </div>
    )
}

export default AddMenu;