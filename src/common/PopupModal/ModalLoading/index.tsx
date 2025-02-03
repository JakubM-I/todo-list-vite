import { useDispatch } from "react-redux";
import { closeModal } from "../modalSlice";

const PopupModalLoading: React.FC = () => {
    const dispatch = useDispatch();

    return (
                <div className="absolute top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] px-2 bg-transparentDarkBackground flex justify-center items-top" 
                    onClick={() => dispatch(closeModal())}
                >
                    <div className="flex justify-center items-center">
                        <p>Ładuje...</p>
                    </div>
                </div>
    )
};

export default PopupModalLoading;