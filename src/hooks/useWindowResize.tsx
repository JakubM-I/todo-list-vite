import { useEffect } from "react";
import { resizeWindow } from "../features/ui/actions/uiAction";
import { useAppDispatch } from "./reduxHooks";

export const useWindowResize = (): void => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resizeWindow());

        const handleResize = (): void => {
            dispatch(resizeWindow());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
};