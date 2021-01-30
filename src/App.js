import React from "react";
import CreateAlert from "./CreateAlert";
import NavBar from "./NavBar";
import SideBar from "./Sidebar";
import "./style.css";

const App = () => {
    return (
        <>
            <NavBar />
            <div className="d-flex">
                <SideBar />
                <CreateAlert />
            </div>


        </>
    )
}

export default App;