import { useDispatch } from "react-redux";
import { addTask, closeAddForm } from "../taskSlice";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const AddTaskForm = () => {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState();
    const [taskDesc, setTaskDesc] = useState();
    const [taskPriority, setTaskPriority] = useState();
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

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!taskName.trim()){
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
        taskNameRef.current.focus();
    }
    

    return (
        <>
            <form>
                <input type="text"  
                    placeholder="Nazwa Zadania" 
                    value={taskName} 
                    ref={taskNameRef} 
                    onChange={({target}) => setTaskName(target.value)}/>
                <input type="text" 
                    placeholder="Opis"
                    value={taskDesc}
                    onChange={({target}) => setTaskDesc(target.value)}
                />
                <div>
                    <select 
                        name="priority"
                        value={taskPriority}
                        onChange={({target}) => setTaskPriority(target.value)}
                    >
                        <option value="0">Priorytet</option>
                        <option value="1">Brak</option>
                        <option value="2">Średni</option>
                        <option value="3">Wysoki</option>
                    </select>
                    <input 
                        type="date" 
                        name="date" 
                        id=""
                        value={taskDate}
                        onChange={({target}) => setTaskDate(target.value)}
                    />
                    <select 
                        name="" 
                        id=""
                        value={taskCategory}
                        onChange={({target}) => setTaskCategory(target.value)}
                    >
                        <option value="domowe">Domowe</option>
                        <option value="praca">Praca</option>
                        <option value="osobiste">Osobiste</option>
                    </select>
                </div>
                <button onClick={onFormSubmit}>Dodaj</button>
            </form>
           
        </>
    )
};

export default AddTaskForm;