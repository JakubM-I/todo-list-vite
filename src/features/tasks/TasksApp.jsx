import { useSelector } from "react-redux";
import PageSection from "../../common/PageSection";
import AddMenu from "./AddMenu";
import TasksList from "./TaskList";
import AddTaskForm from "./AddForm";
import { addFormState } from "./taskSlice";

const TasksApp = () => {
    const openAddForm = useSelector(addFormState);

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
       {openAddForm ? (<AddTaskForm />) : ""}
        
    </>
    )
};

export default TasksApp;