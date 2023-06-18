import React from "react"
import {createBrowserRouter} from "react-router-dom";
//pages
import Main from "./pages/Main";
import ChampionState from "./pages/ChampionState";
import Summoner from "./pages/Summoner";
import Champion from "./pages/Champion";
import Community from "./pages/Community_page";
import CreatePost from "./pages/CreatePost";
import CommunityDetail from "./pages/Community_detail";
import Password from "./pages/Password";
import PasswordReset from "./pages/PasswordReset";
import Login from "./pages/Login"
import Join from "./pages/Join"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path:"/ChampionState",
        element:<ChampionState/>
    },
    {
        path:"/Summoner",
        element:<Summoner/>
    },
    {
        path: "/Champion",
        element: <Champion/>
    },
    {
        path: "/Community",
        element: <Community/>
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/Join",
        element: <Join/>
    },
    {
        path: "/Password",
        element: <Password/>
    },
    {
        path: "/PasswordReset",
        element: <PasswordReset/>
    },
    {
        path:"/Community/:no",
        element:<CommunityDetail />
    },
    {
        path:"/Community/create/",
        element:<CreatePost />
    },
])

export default router;