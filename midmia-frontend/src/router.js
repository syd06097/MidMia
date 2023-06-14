import React from "react"
import {createBrowserRouter} from "react-router-dom";
//pages
import Main from "./pages/Main";
import ChampionState from "./pages/ChampionState";
import Summoner from "./pages/Summoner";

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
])

export default router;