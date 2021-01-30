import React from "react";
import MyAccount from "./MyAccount";
import NavBar from "./NavBar";
import SideBar from "./Sidebar";
import "./style.css";
import Tables from "./Tables";
import UpdateAlert from "./UpdateAlert";

const App = () => {
    return (
        <>
            <NavBar />
            <div className="d-flex">
                <SideBar />
                <MyAccount />
            </div>


        </>
    )
}

export default App;