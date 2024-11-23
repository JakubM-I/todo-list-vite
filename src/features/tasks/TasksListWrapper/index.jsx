import { Outlet } from "react-router-dom";
import TasksList from "../TaskList"

const TasksListWrapper = () => {
    return (
        <div className="flex gap-3">
            <TasksList />
            <Outlet />
        </div>
    )
};

export default TasksListWrapper;