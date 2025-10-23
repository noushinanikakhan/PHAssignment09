import React from "react"
import { Outlet } from "react-router";
import Header from "../component/Header";
import Navbar from "../component/Navbar";

const HomeLayouts = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Header>    
            <Header></Header>
        </Header>

        <main>
            <Outlet></Outlet>
        </main>

        <footer></footer>

        </div>
    )
}

export default HomeLayouts;