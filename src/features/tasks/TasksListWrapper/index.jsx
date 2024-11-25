import { Outlet } from "react-router-dom";
import TasksList from "../TaskList"
import { useSelector } from "react-redux";
import { taskSelector } from "../taskSlice";
import EmptyTasksList from "../EmptyTasksList";

const TasksListWrapper = () => {
    const tasks = useSelector(taskSelector);
    return (
        <div className="flex gap-3">
            { tasks.length > 0 ? (
                <>
                    <TasksList />
                    <Outlet />
                </>
            ) : (<EmptyTasksList />)}
        </div>
    )
};

export default TasksListWrapper;