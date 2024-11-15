import { Outlet } from "react-router-dom";
import MainElement from "../../common/Main";

const RootElement = () =>  {
    return (
        <div className="w-[min(1000px,calc(100%-20px))] mx-auto text-red-600 text-center">
            <h1 className="font-bold text-[22px]">Lista zadań</h1>
            <MainElement>
                <Outlet />
            </MainElement>
        </div>
    )
};

export default RootElement;