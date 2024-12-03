export const saveTaskToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

export const loadTaskFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("tasks")) || [];

export const saveCategoryToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

export const loadCategoryFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("tasks")) || [];