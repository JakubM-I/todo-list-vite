import { useDispatch } from "react-redux";
import PageSection from "../PageSection";
import { closeModal } from "./modalSlice";

const PopupModal = ({title, body}) => {
    const dispatch = useDispatch();

    const handleContentCLick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-transparent flex justify-center items-top" 
        onClick={() => dispatch(closeModal())}>
             <div className=" bg-primaryLightColor p-3 mt-14 w-fit h-fit" onClick={handleContentCLick}>
             <button className="p-1 bg-primaryGreyColor" onClick={() => dispatch(closeModal())}>x</button> 
                <PageSection 
                    title={title}
                    body={body}
                />
             </div>
        </div>
    )
};

export default PopupModal;