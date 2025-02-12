import { allTaskDone, hideDoneTasks, AnyTaskDone, taskSelector, toggleAllTaskDone, hideDoneTasksState } from "../taskSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

const TasksMenu = (): React.ReactElement => {
    const tasks = useAppSelector(taskSelector);
    const isHiiden = useAppSelector(hideDoneTasksState);
    const isAllTaskDone = useAppSelector(allTaskDone);
    const isAnyTaskDone = useAppSelector(AnyTaskDone);
    const dispatch = useAppDispatch();

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