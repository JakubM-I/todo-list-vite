import { Outlet, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi"
import TasksList from "../TaskList"
import { closeSearchingTasks, isTaskSearching, taskSelector } from "../taskSlice";
import EmptyTasksList from "../EmptyTasksList";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import React from "react";

const TasksListWrapper = (): React.ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const tasks = useAppSelector(taskSelector);
    const isSearchingOm = useAppSelector(isTaskSearching);

    const closeSearchTask = (): void => {
        navigate("/");
        dispatch(closeSearchingTasks());
    }

    return (
        <>
            {isSearchingOm && (
                <div className="pb-3">
                    <button
                        onClick={() => closeSearchTask()}
                        className="text-sm text-primaryTextColor hover:text-primaryBlueHover flex justify-start items-center gap-2"
                    >
                        <BiArrowBack />Wróć do wszystkich
                    </button>
                </div>)
            }
            <div className="flex gap-3">
                {tasks.length > 0 ? (
                    <>
                        <TasksList />
                        <Outlet />
                    </>
                ) : (<EmptyTasksList />)}
            </div>
        </>
    )
};

export default TasksListWrapper;