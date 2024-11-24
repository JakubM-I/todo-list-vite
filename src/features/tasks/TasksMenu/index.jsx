import { useSelector } from "react-redux";
import { taskSelector } from "../taskSlice";

const TasksMenu = () => {
    const tasks = useSelector(taskSelector);
    console.log(tasks.length);

    return (
        <>
            {tasks.length > 0 ? (<div className="w-[calc(100%-20px)] mx-auto border-x border-b border-borderGray border-solid rounded-b">
                <ul className="flex justify-end items-center gap-4 p-[5px] pr-2 text-sm">
                    <li>Zakończ wszystkie zadania</li>
                    <li>Ukryj zakończone</li>
                </ul>
            </div>) : ""}
        </>
    )
};

export default TasksMenu;