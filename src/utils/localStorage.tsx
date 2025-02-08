import { Category, Configuration, Task } from "../types/interfaces";

export const saveTaskToLocalStorage = (tasks: Task) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

export const loadTaskFromLocalStorage = (): Task[] =>
    JSON.parse(localStorage.getItem("tasks") || "[]");

export const saveCategoryToLocalStorage = (categories: Category) => {
    localStorage.setItem("categories", JSON.stringify(categories))
};

export const loadCategoryFromLocalStorage = (): Category => {
    const category = localStorage.getItem("categories");
    return category ? JSON.parse(category) : [{ "categoryId": "0", "categoryName": "Kategoria" }]
};

export const saveConfigurationToLocalStorage = (configuration: Configuration) => {
    localStorage.setItem("configuration", JSON.stringify(configuration))
};

export const loadConfigurationFromLocalStorage = (): Configuration =>
    JSON.parse(localStorage.getItem("configuration") || "null");