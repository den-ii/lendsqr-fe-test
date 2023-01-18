import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar";
import { SideNav } from "../../components/SideNav";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="outlet__side-nav">
        <div className="side-navs">
          <SideNav />
        </div>
        <div className="main-container">
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
