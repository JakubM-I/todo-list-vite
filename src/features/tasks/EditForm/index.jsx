import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { categorySelector } from "../../categories/categorySlice";


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
    const categories = useSelector(categorySelector);
    const nameRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    }, []);

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
                        <input 
                            className="font-bold text-base/[1] p-2 bg-primaryGreyColor flex-grow focus-visible outline-none"
                            type="text" 
                            ref={nameRef}
                            value={editTaskData.taskName}
                            onChange={({target}) => setEditTaskData(prev => ({
                                ...prev,
                                taskName: target.value,
                                }) 
                            )}
                        />
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
                            className="block text-sm/[1.2] mb-3 p-1 w-full border-solid border-borderGray focus:outline-none focus:border-b" />
                                {/* {editedTask.taskDesc}</input> */}
                        <div className="flex gap-2 items-center mb-3">
                            <input 
                                className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded"
                                type="date"
                                name="date"
                                value={editTaskData.taskDate}
                                onChange={({target}) => setEditTaskData(prev => ({
                                    ...prev,
                                    taskDate: target.value,
                                    })
                                )}
                            />
                            <select 
                                className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded"
                                value={editTaskData.taskCategory}
                                onChange={({target}) => setEditTaskData(prev => ({
                                    ...prev,
                                    taskCategory: target.value,
                                    })
                                )}
                            >
                                {categories.map(category => (
                                    <option 
                                        key={category.categoryId}
                                        value={category.categoryName.toLowerCase()}    
                                    >
                                        {category.categoryName}
                                    </option>
                                ))}           
                            </select>
                            <select 
                                className="block text-xs/[1] p-[4px] border border-solid border-borderGray rounded"
                                name="priority"
                                value={editTaskData.taskPriority}
                                onChange={({target}) => setEditTaskData(prev => ({
                                    ...prev,
                                    taskPriority: target.value,
                                    })
                                )}
                            >
                                <option value="0">Priorytet</option>
                                <option value="1">Brak</option>
                                <option value="2">Średni</option>
                                <option value="3">Wysoki</option>
                            </select>
                        </div>
                        <div className="flex justify-end items-center gap-2">
                            <button 
                                className="bg-primaryBlue rounded-lg border border-primaryBlue text-primaryLightColor text-[min(max(2.89vw,14px),17px)]/[1] py-2 px-3 transition-colors easy-in duration-700 hover:bg-primaryLightColor hover:text-primaryBlue"
                                onClick={onCancel} 
                            >
                                Anuluj
                            </button>
                            <button
                                className="bg-primaryBlue rounded-lg border border-primaryBlue text-primaryLightColor text-[min(max(2.89vw,14px),17px)]/[1] py-2 px-3 transition-colors easy-in duration-700 hover:bg-primaryLightColor hover:text-primaryBlue" 
                                type="submit"
                            >
                                Zapisz
                            </button>
                        </div>                                    
                    </div>

            </form>
    </>
    )
};

export default EditTaskForm;