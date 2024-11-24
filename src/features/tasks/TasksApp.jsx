
import PageSection from "../../common/PageSection";
import AddMenu from "./AddMenu";
import TasksList from "./TaskList";
import TasksListWrapper from "./TasksListWrapper";
import TasksMenu from "./TasksMenu";



const TasksApp = () => {
    

    return (
    <div>
       {/* <PageHeader title="Lista zadań" /> */}
       {/* <PageSection 
            title="Dodaj zadanie"
            body={<p>ToDo list - Will be here soon</p>}
       /> */}
        <PageSection 
            title="Lista zadań"
            headerMenu={<AddMenu />}
            menu={<TasksMenu />}
            body={<TasksListWrapper />}
       />
        
    </div>
    )
};

export default TasksApp;