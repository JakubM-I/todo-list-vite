import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import priority1 from "../../../assets/priority-1-icon.png";
import priority2 from "../../../assets/priority-2-icon.png"
import { useDispatch, useSelector } from "react-redux";
import { openAddForm, removeTask, searchTaskBtQuery, taskSelector, toggleTaskDone } from "../taskSlice";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";


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
        navigate(`details/${taskId}`)
        dispatch(openAddForm())
    }

    return (
        <ul className="grow">
            {
                [...tasks]
                .sort((a, b) => a.taskDone - b.taskDone || b.taskPriority - a.taskPriority)
                .map(task => (
                    <li key={task.id} className={`flex justify-between items-center gap-3 p-[5px] w-full border-b border-b-borderGray border-b-solid ${task.taskVisibility ? "" : "hidden"}`}>
                        <button className="group shrink-0 border border-solid border-borderGray rounded-full w-buttons h-buttons bg-doneButton flex justify-center items-center text-[#fff] text-[20px]"
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        >
                            {!task.taskDone ? (<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-[450ms] delay-100"><BiCheckCircle /></span>) : "" }
                            
                            {task.taskDone ? (<BiCheckCircle />) : ""}
                        </button>
                            <div className="grow">
                                <div className={`cursor-pointer  ${task.taskDone ? "line-through text-disabledGray" : ""}`} 
                                onClick={() => onTaskClick(task.id)}>
                                    {task.taskName}
                                </div>
                                {/* <NavLink to={`details/${task.id}`} >
                                    {task.taskName}
                                </NavLink> */}
                            </div>
                        <div className="flex gap-[5px]">
                            <span className="size-buttons flex justify-center items-center">
                                {toggleTaskPriority(task.taskPriority)}
                                {/* <img src={priority1} alt="" /> */}
                            </span>
                            <button 
                                className="shrink-0 border border-solid border-borderGray rounded-full w-buttons h-buttons bg-removeButton flex justify-center items-center text-[#fff] text-[20px]"
                                onClick={() => dispatch(removeTask(task.id))}
                            >
                                <BiTrash />
                            </button>
                        </div>
                    </li>
                ))}
        </ul>
    )
};

export default TasksList;