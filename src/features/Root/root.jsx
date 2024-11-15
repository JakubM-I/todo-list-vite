import { Outlet } from "react-router-dom";
import MainElement from "../../common/Main";

const RootElement = () =>  {
    return (
        <div className="w-[min(1000px,calc(100%-20px))] mx-auto">
            <MainElement>
                <Outlet />
            </MainElement>
        </div>
    )
};

export default RootElement;