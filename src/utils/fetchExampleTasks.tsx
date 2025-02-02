import { Task } from "../types/interfaces";

export const fetchExampleDataFile = async (): Promise<Task[]> => {
    const response = await fetch("https://todolist-ext-app.netlify.app/exampleData.json");

    if(!response.ok){
        throw new Error(response.statusText)
    };

    return await response.json() as Task[];
}