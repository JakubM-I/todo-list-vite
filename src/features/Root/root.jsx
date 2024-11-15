import { Outlet } from "react-router-dom";

const RootElement = () =>  {
    return (
        <div className="mx-auto w-[100%] max-w-[800px] text-red-600 text-center">
            <h1 className="font-bold text-[22px]">Lista zadań</h1>
            <Outlet />
        </div>
    )
};

export default RootElement;