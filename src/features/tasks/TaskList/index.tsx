import { BiCheck } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { hideDoneTasksState, removeTask, toggleTaskDone } from "../taskSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toggleTaskPriority } from "../../../utils/toggleTaskPriority";
import { groupTask } from "../../../utils/taskGroup.tsx";
import { configSortTypeSelector } from "../../configuration/configurationSlice";
import { ReturnedGroupedTasks } from "../../../types/types.ts";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks.tsx";

const TasksList: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("szukaj");
    const { groups }: ReturnedGroupedTasks = groupTask();
    const sortType: string = useAppSelector(configSortTypeSelector);
    const isHideDoneTasks: boolean = useAppSelector(hideDoneTasksState);

    const onTaskClick = (taskId: string): void => {
        navigate(`details/${taskId}${query ? `?szukaj=${query}` : ""}`)
    }

    return (
        <ul className="grow">
            {groups
                .map(group => (
                    <li
                        key={group.id}
                        className="pb-2"
                    >
                        {group.label && (
                            <h3 className="pb-2 font-bold text-l capitalize">
                                {group.label}
                            </h3>
                        )}
                        <ul>
                            {group.tasks
                                .map(task => (
                                    <li key={task.id} className={`px-[5px] py-2 w-full border-b border-b-borderGray border-b-solid ${isHideDoneTasks && task.taskDone ? "hidden" : ""}`}>
                                        <div className="flex justify-between items-center gap-3 mb-2">
                                            <button className="group shrink-0 border border-solid border-doneButton rounded-full w-[22px] h-[22px] flex justify-center items-center text-doneButton text-[20px]"
                                                onClick={() => dispatch(toggleTaskDone(task.id))}
                                            >
                                                {!task.taskDone ? (<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-[450ms] delay-100"><BiCheck /></span>) : ""}

                                                {task.taskDone ? (<BiCheck />) : ""}
                                            </button>
                                            <div className="grow">
                                                <div className={`cursor-pointer text-base ${task.taskDone ? "line-through text-disabledGray" : ""}`}
                                                    onClick={() => onTaskClick(task.id)}>
                                                    {task.taskName}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-center gap-2">
                                            {task.taskPriority === "0" || task.taskPriority === "1" ? "" : (<p className="block text-xs/[1] p-[4px]">{toggleTaskPriority(task.taskPriority!)}</p>)}
                                            {sortType === "date" && task.taskCategory && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskCategory}</p>)}
                                            {sortType === "category" && task.taskDate && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskDate}</p>)}
                                            <button
                                                title="Usuń"
                                                className="shrink-0 ml-auto p-[3px] border border-solid border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded w-[24px] h-[24px] flex justify-center items-center text-primaryTextColor text-[18px]"
                                                onClick={() => dispatch(removeTask(task.id))}
                                            >
                                                <BiTrash />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </li>
                ))
            }
        </ul>
    )
};

export default TasksList;