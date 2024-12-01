import { BiCheckCircle } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import priority1 from "../../../assets/priority-1-icon.png";
import priority2 from "../../../assets/priority-2-icon.png"
import { useDispatch, useSelector } from "react-redux";
import { openAddForm, removeTask, searchTaskBtQuery, taskSelector, toggleTaskDone } from "../taskSlice";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
{/* <BiCheck /> */}
{/* <BiCheckCircle /> */}


const TasksList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("szukaj")
    const tasks = useSelector(state => searchTaskBtQuery(state, query));

    const toggleTaskPriority = (taskPriority) => {
        if(taskPriority === "0" || taskPriority === "1" ){
            return "";
        };

        if(taskPriority === "2"){
            return <img src={priority2} alt="" />
        }

        return <img src={priority1} alt="" /> 
    }

    const onTaskClick = (taskId) => {
        navigate(`details/${taskId}${query ? `?szukaj=${query}` : ""}`)
        // dispatch(openAddForm())
    }

    const allDatesList = tasks.map(task => ({ id: nanoid(), date: task.taskDate }))

    const datesList = [...new Map(allDatesList.map((m) => [m.date || "no-date", m])).values()];

    return (
        <ul className="grow">
            {[...datesList]
                .sort((a, b) => {
                    if(!a.date) return -1;
                    if(!b.date) return 1;

                    return new Date(b.date) - new Date(a.date);
                })
                .map(date => (
                    <li 
                        key={date.id}
                        className="pb-2"
                    >
                        {date.date && (
                            <h3 className="pb-2 font-bold text-lg">
                                {date.date}
                            </h3>
                        )}
                            {[...tasks]
                            .filter(task => task.taskDate === date.date)
                            .sort((a, b) => a.taskDone - b.taskDone || b.taskPriority - a.taskPriority)
                            .map(task => (
                                <li key={task.id} className={`flex justify-between items-center gap-3 px-[5px] py-2 w-full border-b border-b-borderGray border-b-solid ${task.taskVisibility ? "" : "hidden"}`}>
                                    <button className="group shrink-0 border border-solid border-doneButton rounded-full w-[22px] h-[22px] flex justify-center items-center text-doneButton text-[20px]"
                                    onClick={() => dispatch(toggleTaskDone(task.id))}
                                    >
                                        {!task.taskDone ? (<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-[450ms] delay-100"><BiCheck /></span>) : "" }
                                        
                                        {task.taskDone ? (<BiCheck />) : ""}
                                    </button>
                                        <div className="grow">
                                            <div className={`cursor-pointer text-base ${task.taskDone ? "line-through text-disabledGray" : ""}`} 
                                            onClick={() => onTaskClick(task.id)}>
                                                {task.taskName}
                                            </div>
                                            {/* <NavLink to={`details/${task.id}`} >
                                                {task.taskName}
                                            </NavLink> */}
                                        </div>
                                    <div className="flex gap-[5px] items-center">
                                        <span className="size-buttons flex justify-center items-center">
                                            {toggleTaskPriority(task.taskPriority)}
                                            {/* <img src={priority1} alt="" /> */}
                                        </span>
                                        <button 
                                            title="Usuń"
                                            className="shrink-0 p-[3px] border border-solid border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded w-[24px] h-[24px] flex justify-center items-center text-primaryTextColor text-[18px]"
                                            onClick={() => dispatch(removeTask(task.id))}
                                        >
                                            <BiTrash />
                                        </button>
                                    </div>
                                </li>
                            ))}
                    </li>
                ))
            }
        </ul>
        
    )
};

export default TasksList;