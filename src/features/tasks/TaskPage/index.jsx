import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { editTask, searchTaskById } from "../taskSlice";
import priority1 from "../../../assets/priority-1-icon.png";
import priority2 from "../../../assets/priority-2-icon.png"
import { BiCheckCircle } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import EditTaskForm from "../EditForm";
import { toggleTaskPriority } from "../../../utils/toggleTaskPriority";

const TaskPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [isEdit, setIsEdit] = useState(false);
    const query = searchParams.get("szukaj");
    const task = useSelector(state => searchTaskById(state, id));
    const dispatch = useDispatch();
    const [isMobile, setIsMobile] = useState(false);
    const mobileBreakePoint = 768;

    const windowWidth = window.innerWidth;

    // const currentWindowWidth = () => {

    // }
    
    useEffect(() =>{
        if(windowWidth <= mobileBreakePoint){
            setIsMobile(true)
        }
    }, [])

    // const toggleTaskPriority = (taskPriority) => {
    //     if(taskPriority === "0" || taskPriority === "1" ){
    //         return "";
    //     };

    //     if(taskPriority === "2"){
    //         return <img src={priority2} alt="" className="w-[1.2em] h-[1.2em]"/>
    //     }

    //     return <img src={priority1} alt="" className="w-[1.2em] h-[1.2em]"/> 
    // };

    const onClickBack = () => {
        navigate(`/${query ? `?szukaj=${query}` : ""}`)
    }

    return (
        <div className={`${isMobile ? "absolute left-[50%] right-0 top-0 w-[calc(100%-25px)] translate-x-[-50%] bg-primaryLightColor" : "w-[50%]" }`}>  
            <div>            
                <span className="flex justify-end">
                    <button onClick={() => onClickBack()} className="pr-1 p-[2px] mb-1 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
                    </button>
                </span>
            </div>
            {isEdit ? (
                <EditTaskForm 
                    editedTask = {task}
                    onCancel = {() => setIsEdit(false)}
                    onSubmit = {(editedTask) => {
                        dispatch(editTask(editedTask));
                        setIsEdit(false);
                    }}
                />
                ) : (
                <>
                    <div className="flex justify-start items-center border-t border-x rounded-t border-solid border-borderGray bg-primaryGreyColor">
                        <span className={`flex justify-center items-center text-doneButton ${task.taskDone && "pl-2" }`}>{task.taskDone ? (<BiCheckCircle />) : ""}</span>
                        <h3 className={`font-bold text-base/[1] p-2 ${task.taskDone && "line-through"}`}>{task.taskName}</h3>
                        {!task.taskDone  && (<button 
                            className="ml-auto mr-2 p-[3px] border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                            onClick={() => setIsEdit(true)}
                        >
                            <BiEditAlt />
                        </button>)}
                    </div>
                    <div className="border rounded-b border-solid border-borderGray p-2">
                        <p className="block text-sm/[1.2] mb-3 p-1">{task.taskDesc}</p>
                        <div className="flex gap-2 items-center">
                            {task.taskDate && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskDate}</p>)}
                            {task.taskCategory && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskCategory}</p>)}
                            {task.taskPriority === "0" || task.taskPriority === "1" ? "" : (<p className="block text-xs/[1] p-[4px] border border-solid border-borderGray rounded">{toggleTaskPriority(task.taskPriority)}</p>) }
                        </div>
                    </div>
                </>
            )}
        </div>
    )
};

export default TaskPage;