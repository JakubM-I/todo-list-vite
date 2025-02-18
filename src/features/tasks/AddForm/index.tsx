import { addTask } from "../taskSlice.jsx";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { categorySelector } from "../../categories/categorySlice.jsx";
import { closingModal } from "../../../common/PopupModal/modalSlice.jsx";
import PrimaryButton from "../../../common/PrimaryButton/index.tsx";
import InputDate from "../../../common/Inputs/inputDate.tsx";
import InputSelect from "../../../common/Inputs/inputSelect.tsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks.tsx";
import { Category } from "../../../types/interfaces.ts";


const AddTaskForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const categories: Category[] = useAppSelector(categorySelector);
    const [taskName, setTaskName] = useState<string>("");
    const [taskDesc, setTaskDesc] = useState<string>();
    const [taskPriority, setTaskPriority] = useState<string>("0");
    const [taskDate, setTaskDate] = useState<string>();
    const [taskCategory, setTaskCategory] = useState<string>();
    const taskNameRef = useRef<HTMLInputElement>(null!);

    const nowDate = new Date();
    const currentDate = [
        nowDate.getFullYear(),
        nowDate.getMonth() <= 9 ? `0${nowDate.getMonth() + 1}` : nowDate.getMonth() + 1,
        nowDate.getDate() <= 9 ? `0${nowDate.getDate()}` : nowDate.getDate(),
    ].join("-");

    useEffect(() => {
        setTaskDate(currentDate)
    }, [currentDate]);

    useEffect(() => {
        taskNameRef.current.focus();
    }, []);

    const onFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!taskName.trim()) {
            return;
        }

        dispatch(addTask({
            id: nanoid(),
            taskName: taskName.trim(),
            taskDesc: taskDesc,
            taskPriority: taskPriority,
            taskDate: taskDate,
            taskCategory: taskCategory,
            taskDone: false,
            taskVisibility: true,
        }))
        dispatch(closingModal());
    };

    return (
        <form className="flex flex-col gap-[10px]">
            <input type="text"
                className="border-b border-solid border-borderGray p-1 text-sm/[1.2] placeholder:text-secondaryText placeholder:text-sm focus-visible outline-none"
                placeholder="Nazwa Zadania"
                value={taskName}
                ref={taskNameRef}
                onChange={({ target }) => setTaskName(target.value)} />
            <input type="text"
                className="border-b border-solid border-borderGray p-1 text-sm/[1.2] placeholder:text-secondaryText placeholder:text-sm focus-visible outline-none"
                placeholder="Opis"
                value={taskDesc}
                onChange={({ target }) => setTaskDesc(target.value)}
            />
            <div className="flex flex-wrap mobile-l:flex-nowrap gap-2 justify-start items-center">
                <InputSelect
                    taskData={taskPriority}
                    onChange={({ target }) => setTaskPriority(target.value)}
                >
                    <option value="0">Priorytet</option>
                    <option value="1">Brak</option>
                    <option value="2">Średni</option>
                    <option value="3">Wysoki</option>
                </InputSelect>
                <InputDate
                    taskData={taskDate}
                    onChange={({ target }) => setTaskDate(target.value)}
                />
                <InputSelect
                    taskData={taskCategory}
                    onChange={({ target }) => setTaskCategory(target.value)}
                >
                    <option value="">Kategoria</option>
                    {categories.map(category => (
                        <option key={category.categoryId} value={category.categoryName.toLowerCase()}>
                            {category.categoryName}
                        </option>
                    ))}
                </InputSelect>
            </div>
            <div className="flex items-center justify-end">
                <PrimaryButton
                    title="Dodaj"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => onFormSubmit(e)}
                />
            </div>
        </form>
    )
};

export default AddTaskForm;