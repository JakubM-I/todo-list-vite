import { BarLoader } from "react-spinners";

const PopupModalLoading: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-4">
            <BarLoader
                color="#2563EB"
            />
        </div>
    )
};

export default PopupModalLoading;