import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Chart from "react-apexcharts";
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home/Index';
import Main from './pages/Main/index'
import Portfolio from './pages/Portfolio/Portfolio';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home/>}>
      <Route path='/main' element={<Main/>}/>
      <Route path='/portfolio' element={<Portfolio Component={<Portfolio/>}/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
