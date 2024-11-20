
import RootElement from "../features/Root/root";
import TaskPage from "../features/tasks/TaskPage";
import TasksApp from "../features/tasks/TasksApp";


export const routes = [
    {
      path: "/",
      element: <RootElement />,
      children: [
        {
            // index: true,
            path: "/",
            element: <TasksApp />,
            children: [
              {
                path: "details/:id",
                element: <TaskPage />
              }
            ]
        },

      ]
      
    }
  ];