import { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserDetailsHead from "../../components/UserDetails/UserDetailsHead";
import { UsersContext } from "../../context/UsersContext";

const ViewUserDetails = () => {
  const navigate = useNavigate();
  const { active, blacklist } = useContext(UsersContext);
  const value = localStorage.getItem("userDetail");
  const userDetail = typeof value === "string" ? JSON.parse(value) : "";

  return (
    <div className="view-userDetails">
      <div className="back" onClick={() => navigate("/dashboard/users")}>
        <img src="/assets/backarrow.svg" alt="" />
        <p>Back to Users</p>
      </div>
      <div className="top-head">
        <div className="title">User Details</div>
        <div className="buttons">
          <button
            className="blacklist"
            onClick={() => blacklist(userDetail.id)}
          >
            BLACKLIST USER
          </button>
          <button className="active" onClick={() => active(userDetail.id)}>
            ACTIVATE USER
          </button>
        </div>
      </div>
      <UserDetailsHead />
      <Outlet />
    </div>
  );
};

export default ViewUserDetails;
