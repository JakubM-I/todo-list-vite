export const fetchExampleDataFile = async () => {
    const response = await fetch("/todo-list-vite/exampleData.json");

    if(!response.ok){
        throw new Error(response.statusText)
    };

    return await response.json();
}