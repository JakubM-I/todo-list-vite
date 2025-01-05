import { useDispatch } from "react-redux";
import { openModal } from "../../../common/PopupModal/modalSlice";
import AddButton from "../../../common/AddButton";

const AddMenu = () => {
    const dispatch = useDispatch();
    const openElement = {
        title: "Nowe zadanie",
        body: "taskForm",
    }

    return (
        <div>
            <AddButton 
                title="Dodaj zadanie"
                onClick={() => dispatch(openModal(openElement))}
            />
        </div>
    )
}

export default AddMenu;