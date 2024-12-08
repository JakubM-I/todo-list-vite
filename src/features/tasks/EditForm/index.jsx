import { useState } from "react";

const EditTaskForm = ({editedTask}) => {
    const [editTaskData, setEditTaskData] = useState(
        {
            taskDone: editedTask.taskDone,
            taskName: editedTask.taskName,
            taskDesc: editedTask.taskDesc,
        }
    ) 

    return (
        <>
        <div className="flex justify-start items-center border-t border-x rounded-t border-solid border-borderGray bg-primaryGreyColor">
            <span className="flex justify-center items-center pl-2 text-doneButton">{editedTask.taskDone ? (<BiCheckCircle />) : ""}</span>
            <h3 className="font-bold text-base/[1] p-2 ">{editedTask.taskName}</h3>
            {/* <button 
                className="ml-auto mr-2 p-[3px] border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                onClick={() => setIsEdit(true)}
            >
                <BiEditAlt />
            </button> */}
        </div>
        <div className="border rounded-b border-solid border-borderGray p-2">
            <p className="block text-sm/[1.2] mb-3">{editedTask.taskDesc}</p>
            {/* <div className="flex gap-2 items-center">
                {task.taskDate && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskDate}</p>)}
                {task.taskCategory && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskCategory}</p>)}
                {task.taskPriority === "0" || task.taskPriority === "1" ? "" : (<p className="block text-xs/[1] p-[4px] border border-solid border-borderGray rounded">{toggleTaskPriority(task.taskPriority)}</p>) }
            </div> */}
        </div>
    </>
    )
};

export default EditTaskForm;