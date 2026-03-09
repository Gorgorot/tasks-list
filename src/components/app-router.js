import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { TasksPage } from "./tasks-page/tasks-page";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index={ true } path="/" exact element={ <TasksPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}
