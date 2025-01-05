import PageSection from "../../common/PageSection";
import AddMenu from "./AddMenu";
import TasksListWrapper from "./TasksListWrapper";
import TasksMenu from "./TasksMenu";

const TasksApp = () => {

    return (
        <PageSection 
            title="Lista zadań"
            headerMenu={<AddMenu />}
            menu={<TasksMenu />}
            body={<TasksListWrapper />}
       />
    )
};

export default TasksApp;