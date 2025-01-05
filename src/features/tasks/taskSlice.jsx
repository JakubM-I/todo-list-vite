import { createSlice } from "@reduxjs/toolkit";
import { loadTaskFromLocalStorage } from "../../utils/localStorage";

const taskSlice = createSlice({
    name: "tasksList",
    initialState: {
        tasks: loadTaskFromLocalStorage(),
        addFormOpen: false,
        isSearching: false,
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
            state.tasks.splice(index, 1);
        },

        toggleAllTaskDone: ({tasks}) => {
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
        },

        editTask: ({tasks}, {payload}) => {
            const taskIndex = tasks.findIndex(task => task.id === payload.id);
            tasks[taskIndex] = payload;
        },

        loadExampleTasks: (state, {payload: exampleTasks}) => {
            state.tasks = exampleTasks;
        },

        openAddForm: state => {
            state.addFormOpen = true;
        },

        closeAddForm: state => {
            state.addFormOpen = false;
        },

        openSearchingTasks: state => {
            state.isSearching = true;
        },

        closeSearchingTasks: state => {
            state.isSearching = false;
        },

    }
});

export const taskStateSelector = state => state.tasks;
export const taskSelector = state => taskStateSelector(state).tasks;
export const addFormState = state => taskStateSelector(state).addFormOpen;
export const searchTaskById = (state, taskId) => taskSelector(state).find(task => task.id === taskId);
export const anyHiddenTask = state => taskSelector(state).some(task => task.taskVisibility === false);
export const allTaskDone = state => taskSelector(state).every(task => task.taskDone === true);
export const AnyTaskDone = state => taskSelector(state).some(task => task.taskDone === true);
export const searchTaskBtQuery = (state, query) => {
    const tasks = taskSelector(state);

    if(!query || query.trim() === ""){
        return tasks;
    }

    return taskSelector(state).filter(task => task.taskName.toUpperCase().includes(query.trim().toUpperCase()) );
};
export const isTaskSearching = state => taskStateSelector(state).isSearching;

export const {addTask, toggleTaskDone, removeTask, toggleAllTaskDone, hideDoneTasks, editTask, loadExampleTasks, openSearchingTasks, closeSearchingTasks, openAddForm, closeAddForm} = taskSlice.actions;
export default taskSlice.reducer;