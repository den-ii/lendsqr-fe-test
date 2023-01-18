import React from "react";
import { NavLink } from "react-router-dom";
import { NGN } from "./utilities";

const UserDetailsHead = () => {
  // console.log("d", userDetail);
  const value = localStorage.getItem("userDetail");

  const userDetail = typeof value === "string" ? JSON.parse(value) : "";
  console.log("userDetail", userDetail);
  const avatar = userDetail.profile.avatar
    ? userDetail.profile?.avatar
    : "/assets/avatar.svg";

  return (
    <div className="user_details_head">
      <div className="top">
        <img src={avatar} alt="avatar" className="avatar" loading="lazy" />
        <div className="name_acc">
          <div className="name top">{`${userDetail.profile.firstName} ${userDetail.profile.lastName}`}</div>
          <div className="acc_no">{userDetail.accountNumber}</div>
        </div>
        <div>
          <div className="users-tier">
            <div className="top">User's tier</div>
            <div>
              <img src="/assets/star-filled.svg" />
              <img src="/assets/star-empty.svg" />
              <img src="/assets/star-empty.svg" />
            </div>
          </div>
        </div>
        <div className="account">
          <div className="top">{NGN.format(userDetail.accountBalance)}</div>
          <div className="bank">9912345678/Providus Bank</div>
        </div>
      </div>
      <div className="bottom">
        <NavLink to="/dashboard/users/general">General Details</NavLink>
        <NavLink to="/dashboard/users/documents">Documents</NavLink>
        <NavLink to="/dashboard/users/bank_details">Bank Details</NavLink>
        <NavLink to="/dashboard/users/loans">Loans</NavLink>
        <NavLink to="/dashboard/users/savings">Savings</NavLink>
        <NavLink to="/dashboard/users/app">App and System</NavLink>
      </div>
    </div>
  );
};

export default UserDetailsHead;
