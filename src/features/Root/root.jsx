import { Outlet } from "react-router-dom";
import MainElement from "../../common/Main";
import NavBar from "../../common/NavBar";
import AddTaskForm from "../tasks/AddForm";
import { useSelector } from "react-redux";
import PopupModal from "../../common/PopupModal";
import { modalOpenSelector } from "../../common/PopupModal/modalSlice";

const RootElement = () =>  {
    const openModal = useSelector(modalOpenSelector);
    console.log(openModal);

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
                    title="Nowe zadanie"
                    body={<AddTaskForm />}
                />
            ) : ""}
        </div>
        
    )
};

export default RootElement;