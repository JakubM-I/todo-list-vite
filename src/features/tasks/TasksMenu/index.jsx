import { useDispatch, useSelector } from "react-redux";
import { allTaskDone, anyHiddenTask, hideDoneTasks, AnyTaskDone, taskSelector, toggleAllTaskDone, hideDoneTasksState } from "../taskSlice";

const TasksMenu = () => {
    const tasks = useSelector(taskSelector);
    // const isHiiden = useSelector(anyHiddenTask);
    const isHiiden = useSelector(hideDoneTasksState);
    const isAllTaskDone = useSelector(allTaskDone);
    const isAnyTaskDone = useSelector(AnyTaskDone);
    const dispatch = useDispatch();

    return (
        <>
            {tasks.length > 0 && (<div className="w-[calc(100%-20px)] mx-auto border-x border-b border-borderGray border-solid rounded-b sticky">
                <ul className="flex flex-wrap justify-evenly items-center gap-2 p-[5px] pr-2 text-sm mobile-l:justify-end mobile-l:flex-nowrap mobile-l:gap-4">
                    {isAnyTaskDone && (
                        <li>
                            <button
                                className="hover:text-primaryBlueHover"
                                onClick={() => dispatch(hideDoneTasks())}>
                                {isHiiden ? "Pokaż" : "Ukryj "} zakończone
                            </button>
                        </li>)}
                    <li>
                        <button
                            className="disabled:text-disabledGray text-primaryBlue hover:text-primaryBlueHover"
                            onClick={() => dispatch(toggleAllTaskDone())}
                            disabled={isAllTaskDone ? true : false}
                        >
                            Zakończ wszystkie
                        </button>
                    </li>
                </ul>
            </div>)}
        </>
    )
};

export default TasksMenu;