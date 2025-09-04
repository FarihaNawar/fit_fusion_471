import React from "react";
import Navbar from "../components/navbar";
import Userbanner from "../components/userbanner";
import Orders from "../components/OrderList";

function Dashboardpage() {
    return (
    <>
    <Navbar/>
    <Userbanner/>
    <Orders/>
    </>
    );
}

export default Dashboardpage;
