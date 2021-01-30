import React from "react";
import NavBar from "./NavBar";
import SideBar from "./Sidebar";
import "./style.css";
import UpdateAlert from "./UpdateAlert";

const App = () => {
    return (
        <>
            <NavBar />
            <div className="d-flex">
                <SideBar />
                <UpdateAlert />
            </div>


        </>
    )
}

export default App;