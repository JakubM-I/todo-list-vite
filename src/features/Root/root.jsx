import { Outlet } from "react-router-dom";
import MainElement from "../../common/Main";
import NavBar from "../../common/NavBar";
import AddTaskForm from "../tasks/AddForm";
import { useSelector } from "react-redux";
import PopupModal from "../../common/PopupModal";
import { modalOpenElementSelector, modalOpenSelector } from "../../common/PopupModal/modalSlice";
import CategoryForm from "../categories/CategoryForm";

const RootElement = () =>  {
    const openModal = useSelector(modalOpenSelector);
    const {title, body, data} = useSelector(modalOpenElementSelector)

    const toggleBodyElement = (body, data) => {
        if(body === "taskForm"){
            return (<AddTaskForm />)
        }

        if(body === "categoryForm"){
            return (<CategoryForm editedCategory={data} />)
        }
    }

    return (
        <div className="relative">
            <NavBar />
            <div className="w-[min(1000px,calc(100%-20px))] mx-auto">
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