import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { resizeWindow } from "./uiAction";

const useWindowResize = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resizeWindow());

        const handleResize = () => {
            dispatch(resizeWindow());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch])
};