export const saveTaskToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

export const loadTaskFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("tasks")) || [            {
        id: "1",
        taskName: "Zadanie 1",
        taskDesc: "Testowe zadanie 2",
        taskPriority: 0,
        taskDate: "2024-11-20",
        taskCategory: "osobiste",
        taskDone: false,
        taskVisibility: true,
    },
    {
        id: "2",
        taskName: "Zadanie 2",
        taskDesc: "Testowe zadanie w",
        taskPriority: 3,
        taskDate: "2024-11-14",
        taskCategory: "praca",
        taskDone: true,
        taskVisibility: true,
    },
    {
        id: "3",
        taskName: "Zadanie 3",
        taskDesc: "Testowe zadanie 3",
        taskPriority: 2,
        taskDate: "",
        taskCategory: "praca",
        taskDone: false,
        taskVisibility: true,
    }];