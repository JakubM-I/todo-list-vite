import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import MainElement from "../../common/Main";
import NavBar from "../../common/NavBar";
import AddTaskForm from "../tasks/AddForm";
import PopupModal from "../../common/PopupModal";
import { modalOpenElementSelector, modalOpenSelector } from "../../common/PopupModal/modalSlice";
import CategoryForm from "../categories/CategoryForm";
import { useWindowResize } from "../../hooks/useWindowResize";
import Notification from "../configuration/Notification";

const RootElement = () =>  {
    useWindowResize()
    const openModal = useSelector(modalOpenSelector);
    const {title, body, data} = useSelector(modalOpenElementSelector)

    const toggleBodyElement = (body, data) => {
        if(body === "taskForm"){
            return (<AddTaskForm />)
        }

        if(body === "categoryForm"){
            return (<CategoryForm editedCategory={data} />)
        }

        if(body === "notification"){
            return (<Notification body={data} />)
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
                    body={toggleBodyElement(body, data)}
                />
            ) : ""}
        </div>
    )
};

export default RootElement;