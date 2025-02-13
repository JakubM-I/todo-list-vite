import PrimaryButton from "../../../common/PrimaryButton"
import { openModal } from "../../../common/PopupModal/modalSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const ButtonMenu = (): React.ReactElement => {
    const dispatch = useAppDispatch();
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