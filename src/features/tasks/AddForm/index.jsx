import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../taskSlice";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { categorySelector } from "../../categories/categorySlice";
import { closeModal, closingModal } from "../../../common/PopupModal/modalSlice";
import PrimaryButton from "../../../common/PrimaryButton";
import InputDate from "../../../common/Inputs/inputDate.tsx";
import InputSelect from "../../../common/Inputs/inputSelect.tsx";


const AddTaskForm = () => {
    const dispatch = useDispatch();
    const categories = useSelector(categorySelector);
    const [taskName, setTaskName] = useState("");
    const [taskDesc, setTaskDesc] = useState();
    const [taskPriority, setTaskPriority] = useState("0");
    const [taskDate, setTaskDate] = useState();
    const [taskCategory, setTaskCategory] = useState();
    const taskNameRef = useRef();

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

    const onFormSubmit = (e) => {
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
        // dispatch(closeModal());
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
                    onClick={onFormSubmit}
                />
            </div>
        </form>
    )
};

export default AddTaskForm;