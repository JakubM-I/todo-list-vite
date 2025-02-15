import { ExampleData } from "../types/interfaces";

export const fetchExampleDataFile = async (): Promise<ExampleData[]> => {
    const response = await fetch("/todo-list-vite/exampleData.json");

    if (!response.ok) {
        throw new Error(response.statusText)
    };

    return await response.json() as ExampleData[];
}