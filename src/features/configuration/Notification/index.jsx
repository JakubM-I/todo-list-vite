import { useDispatch } from "react-redux";
import { closeModal } from "../../../common/PopupModal/modalSlice";
import PrimaryButton from "../../../common/PrimaryButton";

const Notification = ({body}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <p className="mb-3">{body}</p>
            <div className="flex justify-end pr-2">
                <PrimaryButton 
                    title="Zamknij"
                    onClick={() => dispatch(closeModal())}
                />
            </div>
        </div>
    )
};

export default Notification;