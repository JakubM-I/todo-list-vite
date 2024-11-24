import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchTaskById } from "../taskSlice";
import priority1 from "../../../assets/priority-1-icon.png";
import priority2 from "../../../assets/priority-2-icon.png"

const TaskPage = () => {
    const {id} = useParams();
    console.log(id)
    const task = useSelector(state => searchTaskById(state, id));
    console.log(task)

    const toggleTaskPriority = (taskPriority) => {
        if(taskPriority === "0" || taskPriority === "1" ){
            return "";
        };

        if(taskPriority === "2"){
            return <img src={priority2} alt="" className="w-[1.2em] h-[1.2em]"/>
        }

        return <img src={priority1} alt="" className="w-[1.2em] h-[1.2em]"/> 
    }

    return (
        <div className="w-[50%]">  
            <div>            
                <span className="flex justify-end">
                    <Link to={"/"} className="pr-1 p-[2px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
                    </Link>
                </span>
            </div>

             <h3 className="border-t border-x rounded-t border-solid border-borderGray  font-bold text-base/[1] bg-primaryGreyColor p-2 ">{task.taskName}</h3>
             <div className="border rounded-b border-solid border-borderGray p-2">
                <p className="block text-sm/[1.2] mb-3">{task.taskDesc}</p>
                <div className="flex gap-2 items-center">
                    {task.taskDate ? (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskDate}</p>) : ""}
                    {task.taskCategory ? (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskCategory}</p>) : ""}
                    {task.taskPriority ? (<p className="block text-xs/[1] p-[4px] border border-solid border-borderGray rounded">{toggleTaskPriority(task.taskPriority)}</p>) : ""}
                </div>
             </div>

        </div>
    )
};

export default TaskPage;