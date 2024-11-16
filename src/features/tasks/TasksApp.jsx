import PageHeader from "../../common/Header";
import PageSection from "../../common/PageSection";
import AddMenu from "./AddMenu";
import TasksList from "./TaskList";

const TasksApp = () => {

    return (
    <>
       {/* <PageHeader title="Lista zadań" /> */}
       {/* <PageSection 
            title="Dodaj zadanie"
            body={<p>ToDo list - Will be here soon</p>}
       /> */}
        <PageSection 
            title="Lista zadań"
            menu={<AddMenu />}
            body={<TasksList />}
       />
        
    </>
    )
};

export default TasksApp;