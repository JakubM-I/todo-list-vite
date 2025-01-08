export const saveTaskToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

export const loadTaskFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("tasks")) || [];

export const saveCategoryToLocalStorage = (categories) => {
    localStorage.setItem("categories", JSON.stringify(categories))
};

export const loadCategoryFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("categories")) || [        {
        "categoryId": "0",   
        "categoryName": "Kategoria"
    }];

export const saveConfigurationToLocalStorage = (configuration) => {
    localStorage.setItem("configuration", JSON.stringify(configuration))
};

export const loadConfigurationFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("configuration"));