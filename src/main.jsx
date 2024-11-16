import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux";
import {routes} from "./routes/routes.jsx"
import './index.css'
import { store } from './store.jsx';


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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
