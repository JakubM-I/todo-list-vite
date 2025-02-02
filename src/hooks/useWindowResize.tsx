import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { resizeWindow } from "../features/ui/actions/uiAction";
import { AppDispatch } from "../store";

export const useWindowResize = (): void => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(resizeWindow());

        const handleResize = (): void => {
            dispatch(resizeWindow());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
};