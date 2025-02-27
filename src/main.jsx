import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import { routes } from "./routes/routes.tsx"
import './index.css'
import { store } from './store.tsx';


const router = createBrowserRouter(routes, {
  basename: "/todo-list-vite/",
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
