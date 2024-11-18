import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import priority1 from "../../../assets/priority-1-icon.png";
import priority2 from "../../../assets/priority-2-icon.png"
import { useDispatch, useSelector } from "react-redux";
import { taskSelector, toggleTaskDone } from "../taskSlice";


const TasksList = () => {
    const tasks = useSelector(taskSelector);
    const dispatch = useDispatch();

    const toggleTaskPriority = (taskPriority) => {
        if(taskPriority === 0 || taskPriority === 1 ){
            return "";
        };

        if(taskPriority === 2){
            return <img src={priority2} alt="" />
        }

        return <img src={priority1} alt="" /> 
    }

    return (
        <ul>
            {
                tasks.map(task => (
                    <li key={task.id} className="flex justify-between items-center gap-3 p-[5px] w-full border-b border-b-borderGray border-b-solid">
                    <button className="shrink-0 border border-solid border-borderGray rounded-full w-buttons h-buttons bg-doneButton flex justify-center items-center text-[#fff] text-[20px]"
                    onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.taskDone ? (<BiCheckCircle />) : ""}
                    </button>
                        <div className="grow">
                            {task.taskName}
                        </div>
                    <div className="flex gap-[5px]">
                        <span className="size-buttons flex justify-center items-center">
                            {toggleTaskPriority(task.taskPriority)}
                            {/* <img src={priority1} alt="" /> */}
                        </span>
                        <button className="shrink-0 border border-solid border-borderGray rounded-full w-buttons h-buttons bg-removeButton flex justify-center items-center text-[#fff] text-[20px]">
                            <BiTrash />
                        </button>
                    </div>
                </li>
                ))}
            {/* <li className="flex justify-between items-center gap-3 p-[5px] w-full border-b border-b-borderGray border-b-solid">
                <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-doneButton flex justify-center items-center text-[#fff] text-[20px]">
                    <BiCheckCircle />
                </button>
                    <div className="grow">
                    Zadanie 1
                    </div>
                <div className="flex gap-[5px]">
                    <span className="size-buttons flex justify-center items-center"><img src={priority1} alt="" /></span>
                    <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-removeButton flex justify-center items-center text-[20px]">
                        <BiTrash />
                    </button>
                </div>
            </li>
            <li className="flex justify-between items-center gap-3 p-[5px] w-full border-b border-b-borderGray border-b-solid">
                <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-doneButton flex justify-center items-center  text-[#fff] text-[20px]">
                    <BiCheckCircle />
                </button>
                    <div className="grow">
                    Zadanie 2
                    </div>
                <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-removeButton flex justify-center items-center text-[20px]">
                    <BiTrash />
                </button>
            </li> */}
        </ul>
    )
};

export default TasksList;