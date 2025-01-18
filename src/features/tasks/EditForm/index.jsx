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
                        className="appearance-none font-bold text-base/[1] p-2 bg-primaryGreyColor flex-grow focus-visible outline-none"
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
                        className="appearance-none block text-sm/[1.2] mb-3 p-1 w-full border-solid border-borderGray focus:outline-none focus:border-b" 
                    />
                    <div className="flex gap-2 items-center mb-3">
                        <div className="relative border border-solid border-borderGray rounded cursor-pointer flex items-center  bg-primaryLightColor">
                            <input 
                                className={`appearance-none h-[22px] min-w-[85px] block text-xs/[1] pl-1 pr-4 focus:outline-none cursor-pointer bg-primaryLightColor 
                                [&::-webkit-calendar-picker-indicator]:opacity-0
    [&::-webkit-calendar-picker-indicator]:absolute
    [&::-webkit-calendar-picker-indicator]:top-0
    [&::-webkit-calendar-picker-indicator]:right-0
    [&::-webkit-calendar-picker-indicator]:w-full
    [&::-webkit-calendar-picker-indicator]:h-full
    [&::-webkit-calendar-picker-indicator]:cursor-pointer 
    ${!editTaskData.taskDate ? 
        "[&::-webkit-datetime-edit-text]:hidden [&::-webkit-datetime-edit]:hidden [&::-webkit-datetime-edit-fields-wrapper]:hidden " 
        : 
    "[&::-webkit-datetime-edit-text]:visible [&::-webkit-datetime-edit]:visible [&::-webkit-datetime-edit-fields-wrapper]:visible "}
    `}
                                type="date"
                                name="date"
                                placeholder="dd.mm.rrrr"
                                value={editTaskData.taskDate}
                                onChange={({target}) => setEditTaskData(prev => ({
                                    ...prev,
                                    taskDate: target.value,
                                    })
                                )}
                            />
                            {!editTaskData.taskDate && (
                                <span className="absolute left-0 top-[-50%] translate-y-[50%] text-xs/[1] p-[5px] pr-[18px] pointer-events-none whitespace-nowrap">
                                        Termin
                                </span>)}
                            {/* {editTaskData.taskDate ? (
                                <span className="absolute top-0 left-0 text-xs/[1] pointer-events-none whitespace-nowrap">
                                        {editTaskData.taskDate ? new Date(editTaskData.taskDate).toLocaleDateString("pl-PL") : ""}
                                </span>
                                
                            ) : (
                                <span className="absolute top-0 left-0 text-xs/[1] pointer-events-none whitespace-nowrap">
                                    dd.mm.rrrr
                                </span>
                            )} */}
                            <div className="absolute inset-y-0 right-0 pr-[2px] flex items-center pointer-events-none">
                                <svg 
                                    className="h-[13px] w-[13px] text-gray-400" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="relative border border-solid border-borderGray rounded cursor-pointer">
                            <select 
                                className="appearance-none block text-xs/[1] p-[5px] pr-[18px] focus:outline-none cursor-pointer bg-primaryLightColor"
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
                            <div className="absolute inset-y-0 right-0 pr-[2px] flex items-center pointer-events-none">
                                <svg
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                                </svg>
                            </div>
                        </div>
                        <div className="relative border border-solid border-borderGray rounded cursor-pointer">
                            <select 
                                className="appearance-none block text-xs/[1] p-[5px] pr-[18px] focus:outline-none cursor-pointer bg-primaryLightColor"
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
                            <div className="absolute inset-y-0 right-0 pr-[2px] flex items-center pointer-events-none">
                                <svg
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                                </svg>
                            </div>
                        </div>

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