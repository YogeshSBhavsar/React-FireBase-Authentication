import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Protected from './components/Protected';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} > 
    <Route path="signup" element={<SignUp />} />
    <Route path="login" element={<Login />} />
        <Route path="/" element={<Protected />} >
        <Route path="/" element={<Home />} />
        </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
);
