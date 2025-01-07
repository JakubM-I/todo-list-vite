import { useDispatch } from "react-redux";
import { openModal } from "../../../common/PopupModal/modalSlice";
import PrimaryButton from "../../../common/PrimaryButton";

const AddMenu = () => {
    const dispatch = useDispatch();
    const openElement = {
        title: "Nowe zadanie",
        body: "taskForm",
    }

    return (
        <div>
            <PrimaryButton 
                title="Dodaj zadanie"
                onClick={() => dispatch(openModal(openElement))}
            />
        </div>
    )
}

export default AddMenu;