import { useDispatch, useSelector } from "react-redux";
import { allTaskDone, anyHiddenTask, hideDoneTasks, taskSelector, toggleAllTaskDone } from "../taskSlice";

const TasksMenu = () => {
    const tasks = useSelector(taskSelector);
    const isHiiden = useSelector(anyHiddenTask);
    const isAllTaskDone = useSelector(allTaskDone);
    console.log(isHiiden)
    const dispatch = useDispatch();

    return (
        <>
            {tasks.length > 0 && (<div className="w-[calc(100%-20px)] mx-auto border-x border-b border-borderGray border-solid rounded-b">
                <ul className="flex justify-end items-center gap-4 p-[5px] pr-2 text-sm">
                    <li>
                        <button 
                            className="disabled:text-disabledGray"
                            onClick={() => dispatch(toggleAllTaskDone())}
                            disabled={isAllTaskDone ? true : false}
                        >
                            Zakończ wszystkie zadania
                        </button>
                    </li>
                    <li>
                        <button onClick={() => dispatch(hideDoneTasks())}>
                            {isHiiden ? "Pokaż" : "Ukryj "} zakończone
                        </button>
                    </li>
                </ul>
            </div>)}
        </>
    )
};

export default TasksMenu;