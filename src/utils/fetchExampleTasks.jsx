export const fetchExampleTasksFile = async () => {
    const response = await fetch("/todo-list-vite/exampleTasks.json");

    if(!response.ok){
        throw new Error(response.statusText)
    }

    return await response.json();
}