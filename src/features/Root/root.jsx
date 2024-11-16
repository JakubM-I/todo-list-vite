import { Outlet } from "react-router-dom";
import MainElement from "../../common/Main";
import NavBar from "../../common/NavBar";

const RootElement = () =>  {
    return (
        <>
            <NavBar />
                <div className="w-[min(1000px,calc(100%-20px))] mx-auto">
                <MainElement>
                    <Outlet />
                </MainElement>
            </div>
        </>
        
    )
};

export default RootElement;