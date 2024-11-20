import { Outlet } from "react-router-dom";
import TasksList from "../TaskList"

const TasksListWrapper = () => {
    return (
        <div className="flex">
            <TasksList />
            <Outlet />
        </div>
    )
};

export default TasksListWrapper;