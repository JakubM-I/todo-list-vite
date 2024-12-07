import { useDispatch } from "react-redux";
import AddButton from "../../../common/AddButton"
import { openModal } from "../../../common/PopupModal/modalSlice";

const ButtonMenu = () => {
    const dispatch = useDispatch();
    const openElement = {
        title: "Nowa kategoria",
        body: "categoryForm",
    }

    return (
        <AddButton 
            title="Dodaj kategorię"
            onClick={() => dispatch(openModal(openElement))}
        />
    )
};

export default ButtonMenu;