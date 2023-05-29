import React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import router from "./router";
/*function Header(){
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}*/

//pages


import Main from './pages/Main';
import ChampionState from './pages/ChampionState';
import {RouterProvider} from "react-router-dom";
const App = () => {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  );
};
export default App;
