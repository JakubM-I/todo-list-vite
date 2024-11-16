import PageHeader from "../../common/Header";
import PageSection from "../../common/PageSection";

const TasksApp = () => {

    return (
    <>
       <PageHeader title="Lista zadań" />
       <PageSection 
            title="Dodaj zadanie"
            body={<p>ToDo list - Will be here soon</p>}
       />
        <PageSection 
            title="Lista zadań"
            body={<p>ToDo list - Will be here soon</p>}
       />
        
    </>
    )
};

export default TasksApp;