import React from "react"
import Main from "./pages/Main";
import ChampionState from "./pages/ChampionState";
import Champion from "./pages/Champion";
import {createBrowserRouter} from "react-router-dom";

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
        path: "/Champion",
        element: <Champion/>
    }
])

export default router