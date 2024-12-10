import { useState } from "react";

const EditTaskForm = ({editedTask, onCancel, onSubmit}) => {
    const [editTaskData, setEditTaskData] = useState(
        {
            id: editedTask.id,
            taskCategory: editedTask.taskCategory,
            taskDate: editedTask.taskDate,
            taskDesc: editedTask.taskDesc,
            taskDone: editedTask.taskDone,
            taskName: editedTask.taskName,
            taskPriority: editedTask.taskPriority,
            taskVisibility: editedTask.taskVisibility
        }
    ); 

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ...editedTask,
            ...editTaskData
        });
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div className="flex justify-start items-center border-t border-x rounded-t border-solid border-borderGray bg-primaryGreyColor">
                        <span className="flex justify-center items-center pl-2 text-doneButton">{editedTask.taskDone ? (<BiCheckCircle />) : ""}</span>
                        <input 
                            type="text" 
                            value={editTaskData.taskName}
                            onChange={({target}) => setEditTaskData(prev => ({
                                ...prev,
                                taskName: target.value,
                                }) 
                            )}
                            className="font-bold text-base/[1] p-2 " />
                                {/* {editedTask.taskName}</input> */}
                        {/* <button 
                            className="ml-auto mr-2 p-[3px] border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                            onClick={() => setIsEdit(true)}
                        >
                            <BiEditAlt />
                        </button> */}
                    </div>
                    <div className="border rounded-b border-solid border-borderGray p-2">
                        <input 
                            type="text" 
                            value={editTaskData.taskDesc}
                            onChange={({target}) => setEditTaskData(prev => ({
                                ...prev,
                                taskDesc: target.value,
                                })
                            )}
                            className="block text-sm/[1.2] mb-3" />
                                {/* {editedTask.taskDesc}</input> */}
                        {/* <div className="flex gap-2 items-center">
                            {task.taskDate && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskDate}</p>)}
                            {task.taskCategory && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskCategory}</p>)}
                            {task.taskPriority === "0" || task.taskPriority === "1" ? "" : (<p className="block text-xs/[1] p-[4px] border border-solid border-borderGray rounded">{toggleTaskPriority(task.taskPriority)}</p>) }
                        </div> */}
                    </div>
                    <div>
                        <button onClick={onCancel} >Anuluj</button>
                        <button type="submit">Zapisz</button>
                    </div>
            </form>
    </>
    )
};

export default EditTaskForm;