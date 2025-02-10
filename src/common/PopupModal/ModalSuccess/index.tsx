import { PopupModalSuccessProps } from "../../../types/interfaces";

const PopupModalSuccess: React.FC<PopupModalSuccessProps> = ({ success }) => {

    return (
        <div className="flex justify-center items-center py-4">
            <p>{success ? success : "Dane zostały zapisane"}</p>
        </div>
    )
};

export default PopupModalSuccess;