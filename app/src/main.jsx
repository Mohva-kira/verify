import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth from './pages/Auth.jsx';
import Vignette from './pages/Vignette.jsx';
import AddVignette from './pages/AddVignette.jsx';
import Header from './components/Header.jsx';
import { store } from './app/store'
import { Provider } from 'react-redux'
import RequireAuth from './components/RequireAuth.jsx';
import LogOut from './components/LogOut.jsx';
import Home from './pages/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },  
  {
    path: "/vignettes/:id",
    element: <RequireAuth> <Vignette /></RequireAuth>,
  },
  {
    path: "/vignette/:id",
    element: <RequireAuth> <Vignette /></RequireAuth>,
  },
  {
    path: "/addVignette",
    element: <AddVignette />,
  },{
    path: "/home",
    element: <Home />,
  },
  {
    path: "/deconnexion",
    element: <LogOut />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Header/>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
