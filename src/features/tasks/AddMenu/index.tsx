import { openModal } from "../../../common/PopupModal/modalSlice";
import PrimaryButton from "../../../common/PrimaryButton";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const AddMenu: React.FC = () => {
    const dispatch = useAppDispatch();
    const openElement = {
        title: "Nowe zadanie",
        elementType: "taskForm",
        success: "Zadanie zostało zapisane"
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