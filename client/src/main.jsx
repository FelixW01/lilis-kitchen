import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,} from 'react-router-dom'

import App from "./App";
import Error from "./pages/error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route 
        path="login" 
        element={ 
            <Login />
      } 
      />
      <Route 
        path="register" 
        element={
            <Register />
      } 
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
