import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import './Style.css'



const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)