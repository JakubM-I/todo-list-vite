export const fetchExampleDataFile = async () => {
    const response = await fetch("https://todolist-ext-app.netlify.app/exampleData.json");

    if(!response.ok){
        throw new Error(response.statusText)
    };

    return await response.json();
}