import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {routes} from "./routes/routes.jsx"
import './index.css'


const router = createBrowserRouter(routes, {
  basename: "/todo-list-vite/",
});
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   }
// ], {
//   basename: "/todo-list-vite/",
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
