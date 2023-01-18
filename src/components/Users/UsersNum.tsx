import { useContext, useState } from "react";

export const UsersNum = () => {
  return (
    <section className="users-num">
      <div className="container">
        <div className="img">
          <img src="/assets/usersnum.svg" alt="users" />
        </div>
        <div className="head">USERS</div>
        <div className="num">2,453</div>
      </div>
      <div className="container">
        <div className="img">
          <img src="/assets/active-users.svg" alt="active-users" />
        </div>
        <div className="head">ACTIVE USERS</div>
        <div className="num">2,453</div>
      </div>
      <div className="container">
        <div className="img">
          <img src="/assets/userLoans.svg" alt="users with loans" />
        </div>
        <div className="head">USERS WITH LOANS</div>
        <div className="num">12,453</div>
      </div>
      <div className="container">
        <div className="img">
          <img src="/assets/userSavingss.svg" alt="users with savings" />
        </div>
        <div className="head">USERS WITH SAVINGS</div>
        <div className="num">102,453</div>
      </div>
    </section>
  );
};

export default UsersNum;
