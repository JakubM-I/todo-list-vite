export const saveTaskToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

export const loadTaskFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("tasks")) || [];

export const saveCategoryToLocalStorage = (categories) => {
    localStorage.setItem("categories", JSON.stringify(categories))
};

export const loadCategoryFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("categories")) || [
        {
            "categoryId": "2",   
            "categoryName": "Osobiste"
        },
        {
            "categoryId": "2",   
            "categoryName": "Praca"
        },
        {
            "categoryId": "3",   
            "categoryName": "Domowe"
        },
        {
            "categoryId": "4",   
            "categoryName": "Sport"
        }
    ];