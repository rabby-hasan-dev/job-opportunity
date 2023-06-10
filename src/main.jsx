import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Statistic from './component/Statistic/Statistic';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Blog from './component/Blog/Blog';
import ErrorPage from './component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobfile.json')
      },
      {
        path: 'statistic',
        element: <Statistic></Statistic>
      },

      {
        path: 'job',
        element: <AppliedJobs></AppliedJobs>

      },

      {
        path: 'blog',
        element: <Blog></Blog>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
