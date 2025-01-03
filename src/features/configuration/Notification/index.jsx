import { useDispatch } from "react-redux";
import { closeModal } from "../../../common/PopupModal/modalSlice";

const Notification = ({body}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <p className="mb-3">{body}</p>
            <div className="flex justify-end pr-2">
                <button 
                    className="bg-primaryBlue rounded-lg border border-primaryBlue text-primaryLightColor text-[min(max(2.89vw,14px),17px)]/[1] py-2 px-3 transition-colors easy-in duration-700 hover:bg-primaryLightColor hover:text-primaryBlue"
                    onClick={() => dispatch(closeModal())}
                >
                        Zamknij
                </button>
            </div>
        </div>
    )
};

export default Notification;