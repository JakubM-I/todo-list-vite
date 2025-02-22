import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import MainElement from "../../common/Main/index.tsx";
import NavBar from "../../common/NavBar";
import AddTaskForm from "../tasks/AddForm";
import PopupModal from "../../common/PopupModal/ModalContent/index.tsx";
import { modalOpenElementSelector, modalOpenSelector } from "../../common/PopupModal/modalSlice";
import CategoryForm from "../categories/CategoryForm";
import { useWindowResize } from "../../hooks/useWindowResize";
import Notification from "../configuration/Notification";

const RootElement = () => {
    useWindowResize()
    const openModal = useSelector(modalOpenSelector);
    const { title, elementType, data, success } = useSelector(modalOpenElementSelector)

    const toggleBodyElement = (elementType, data, success) => {
        if (elementType === "taskForm") {
            return (<AddTaskForm />)
        }

        if (elementType === "categoryForm") {
            return (<CategoryForm editedCategory={data} />)
        }

        if (elementType === "notification") {
            return (<Notification body={success} />)
        }
    }

    return (
        <div className="relative h-[100svh]">
            <NavBar />
            <div className="w-[min(1000px,calc(100%-20px))] mx-auto h-[calc(100%-82px)]">
                <MainElement>
                    <Outlet />
                </MainElement>
            </div>
            {openModal ? (
                <PopupModal
                    title={title}
                    body={toggleBodyElement(elementType, data, success)}
                    success={success}
                />
            ) : ""}
        </div>
    )
};

export default RootElement;