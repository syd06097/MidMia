import React from "react"
import Main from "./pages/Main";
import ChampionState from "./pages/ChampionState";
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
])

export default router