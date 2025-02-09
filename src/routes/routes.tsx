
import CategoryApp from "../features/categories/CategoryApp";
import ConfigurationApp from "../features/configuration/ConfigurationApp";
import RootElement from "../features/Root/root";
import TaskPage from "../features/tasks/TaskPage";
import TasksApp from "../features/tasks/TasksApp";


export const routes = [
    {
      path: "/",
      element: <RootElement />,
      loader: () => {
        return fetch("/todo-list-vite/menuRoutes.json")
      },
      children: [
        {
            path: "/",
            element: <TasksApp />,
            children: [
              {
                path: "details/:id",
                element: <TaskPage />
              }
            ]
        },
        {
          path: "categories",
          element: <CategoryApp />
        },
        {
          path: "configuration",
          element: <ConfigurationApp />
        }
      ]
    }
  ];