export const saveTaskToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

export const loadTaskFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("tasks")) || [            {
        id: 1,
        taskName: "Zadanie 1",
        taskPriority: 0,
        taskDone: false,
        taskVisibility: true,
    },
    {
        id: 2,
        taskName: "Zadanie 2",
        taskPriority: 3,
        taskDone: true,
        taskVisibility: true,
    },
    {
        id: 3,
        taskName: "Zadanie 3",
        taskPriority: 2,
        taskDone: false,
        taskVisibility: true,
    }];