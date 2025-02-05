import { useDispatch } from "react-redux";
import PrimaryButton from "../../../common/PrimaryButton"
import { openModal } from "../../../common/PopupModal/modalSlice";

const ButtonMenu = () => {
    const dispatch = useDispatch();
    const openElement = {
        title: "Nowa kategoria",
        body: "categoryForm",
        success: "Kategoria została zapisana"
    }

    return (
        <PrimaryButton
            title="Dodaj kategorię"
            onClick={() => dispatch(openModal(openElement))}
        />
    )
};

export default ButtonMenu;