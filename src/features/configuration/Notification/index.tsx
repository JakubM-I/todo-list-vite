import { closeModal } from "../../../common/PopupModal/modalSlice";
import PrimaryButton from "../../../common/PrimaryButton";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const Notification = ({ body }: { body: string }): React.ReactElement => {
    const dispatch = useAppDispatch();

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