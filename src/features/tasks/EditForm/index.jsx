import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { categorySelector } from "../../categories/categorySlice";
import PrimaryButton from "../../../common/PrimaryButton";


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
                </div>
                <div className="border-none mobile-l:border-solid rounded-b border border-borderGray p-2">
                    <input 
                        type="text" 
                        placeholder="Opis"
                        value={editTaskData.taskDesc}
                        onChange={({target}) => setEditTaskData(prev => ({
                            ...prev,
                            taskDesc: target.value,
                            })
                        )}
                        className="block text-sm/[1.2] mb-3 p-1 w-full border-solid border-borderGray focus:outline-none focus:border-b" 
                    />
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
                        <PrimaryButton 
                            title="Anuluj"
                            onClick={onCancel}
                        />
                        <PrimaryButton 
                            title="Zapisz"
                            type="submit"
                        />
                    </div>                                    
                </div>
            </form>
    )
};

export default EditTaskForm;