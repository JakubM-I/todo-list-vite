
import RootElement from "../features/Root/root";
import TasksApp from "../features/tasks/TasksApp";


export const routes = [
    {
      path: "/",
      element: <RootElement />,
      children: [
        {
            index: true,
            element: <TasksApp />
        }
      ]
      
    }
  ];