import React, { useEffect, useRef, useState } from "react";
import { categorySelector } from "../../categories/categorySlice.jsx";
import PrimaryButton from "../../../common/PrimaryButton/index.tsx";
import InputDate from "../../../common/Inputs/inputDate.tsx";
import InputSelect from "../../../common/Inputs/inputSelect.tsx";
import { Category, EditTaskFormProps, Task } from "../../../types/interfaces.ts";
import { useAppSelector } from "../../../hooks/reduxHooks.tsx";


const EditTaskForm: React.FC<EditTaskFormProps> = ({ editedTask, onCancel, onSubmit }) => {
    const [editTaskData, setEditTaskData] = useState<Task>(
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
    const categories: Category[] = useAppSelector(categorySelector);
    const nameRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const onFormSubmit = (e: React.SyntheticEvent) => {
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
                    onChange={({ target }) => setEditTaskData(prev => ({
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
                    onChange={({ target }) => setEditTaskData(prev => ({
                        ...prev,
                        taskDesc: target.value,
                    })
                    )}
                    className="appearance-none block text-sm/[1.2] mb-3 p-1 w-full border-solid border-borderGray focus:outline-none focus:border-b"
                />
                <div className="flex gap-2 items-center mb-3">
                    <InputDate
                        taskData={editTaskData.taskDate}
                        onChange={({ target }) => setEditTaskData(prev => ({
                            ...prev,
                            taskDate: target.value,
                        })
                        )}
                    />
                    <InputSelect
                        taskData={editTaskData.taskCategory}
                        onChange={({ target }) => setEditTaskData(prev => ({
                            ...prev,
                            taskCategory: target.value,
                        })
                        )}
                    >
                        <option value="">Kategoria</option>
                        {categories.map(category => (
                            <option
                                key={category.categoryId}
                                value={category.categoryName.toLowerCase()}
                            >
                                {category.categoryName}
                            </option>
                        ))}
                    </InputSelect>
                    <InputSelect
                        taskData={editTaskData.taskPriority}
                        onChange={({ target }) => setEditTaskData(prev => ({
                            ...prev,
                            taskPriority: target.value,
                        })
                        )}
                    >
                        <option value="0">Priorytet</option>
                        <option value="1">Brak</option>
                        <option value="2">Średni</option>
                        <option value="3">Wysoki</option>
                    </InputSelect>
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