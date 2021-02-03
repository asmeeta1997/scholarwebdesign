import React from "react";
import MyAccount from "./Components/MyAccount";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/Sidebar";
import "./style.css";

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