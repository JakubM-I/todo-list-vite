import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchTaskById } from "../taskSlice";

const TaskPage = () => {
    const {id} = useParams();
    console.log(id)
    const task = useSelector(state => searchTaskById(state, id));
    console.log(task)

    return (
        <div className="w-[50%]">  
            <div>            
                <span className="block">
                    <Link to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
                    </Link>
                </span>
            </div>

             <h3 className="font-bold text-base/[1] bg-primaryGreyColor p-2">{task.taskName}</h3>
             <p className="block p-2 text-sm mb-2">{task.taskDesc}</p>
             <div className="flex gap-2 px-2">
                {task.taskDate ? (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskDate}</p>) : ""}
                {task.taskCategory ? (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskCategory}</p>) : ""}
             </div>
        </div>
    )
};

export default TaskPage;