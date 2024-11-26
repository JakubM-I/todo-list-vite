import { createSlice } from "@reduxjs/toolkit";
import { loadTaskFromLocalStorage } from "../../utils/localStorage";

const taskSlice = createSlice({
    name: "tasksList",
    initialState: {
        tasks: loadTaskFromLocalStorage(),
        addFormOpen: false,
    },
    reducers: {
        addTask: ({tasks}, {payload: newTask}) => {
            tasks.push(newTask)
        },

        toggleTaskDone: (state, {payload: taskId}) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks[index].taskDone = !state.tasks[index].taskDone;
        },

        removeTask: (state, {payload: taskId}) => {
            const index = state.tasks.findIndex(task => task.id === taskId)
            state.tasks.splice(index, 1)
            // state.tasks = state.tasks.filter(task => task.id !== taskId )
        },

        toggleAllTaskDone: ({tasks}) => {
            // tasks.map(task => task.taskDone = true)
            for(const task of tasks){
                task.taskDone = true;
            }
        },

        hideDoneTasks: ({tasks}) => {
            tasks.forEach(task => {
                if(task.taskDone === true){
                    task.taskVisibility = !task.taskVisibility;
                }
            })
            // const doneTasks = tasks.filter(task => task.taskDone === true)
            // for(const task of doneTasks){
            //     if(task.taskDone){
            //         task.taskVisibility = !tasks.taskVisibility;
            //     }
            // }
        },

        openAddForm: state => {
            state.addFormOpen = true;
        },
        closeAddForm: state => {
            state.addFormOpen = false;
        }
    }
});

export const taskStateSelector = state => state.tasks;
export const taskSelector = state => taskStateSelector(state).tasks;
export const addFormState = state => taskStateSelector(state).addFormOpen;
export const searchTaskById = (state, taskId) => taskSelector(state).find(task => task.id === taskId);
export const anyHiddenTask = state => taskSelector(state).some(task => task.taskVisibility === false)

export const {addTask, toggleTaskDone, removeTask, toggleAllTaskDone, hideDoneTasks, openAddForm, closeAddForm} = taskSlice.actions;
export default taskSlice.reducer;