import { Outlet } from "react-router-dom";

const RootElement = () =>  {
    return (
        <>
        <h1>Lista zadań</h1>
        <Outlet />
        </>
    )
};

export default RootElement;