import { useDispatch, useSelector } from "react-redux";
import PageSection from "../../PageSection";
import { closeModal, modalOpenLoadingSelector, modalOpenSuccessSelector } from "../modalSlice";
import { PopupModalProps } from "../../../types/interfaces";
import PopupModalLoading from "../ModalLoading";
import PopupModalSuccess from "../ModalSuccess";
import { AppDispatch } from "../../../store";

const PopupModal: React.FC<PopupModalProps> = ({ title, body, success }) => {
    const dispatch = useDispatch<AppDispatch>();
    const isLoading = useSelector(modalOpenLoadingSelector);
    const isSuccess = useSelector(modalOpenSuccessSelector);

    const handleContentCLick = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    }

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] px-2 bg-transparentDarkBackground flex justify-center items-start"
            onClick={() => dispatch(closeModal())}
        >
            <div className="border border-solid border-borderGray bg-primaryLightColor p-3 mt-14 w-[min(450px,100%)] h-fit" onClick={handleContentCLick}>
                {!isLoading && !isSuccess && (
                    <>
                        <div className="flex items-center justify-end">
                            <button className="pr-1 p-[2px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded" onClick={() => dispatch(closeModal())}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
                            </button>
                        </div>
                        <PageSection
                            title={title}
                            body={body}
                        />
                    </>
                )}
                {isLoading && <PopupModalLoading />}
                {isSuccess && <PopupModalSuccess success={success} />}
            </div>
        </div>
    )
};

export default PopupModal;