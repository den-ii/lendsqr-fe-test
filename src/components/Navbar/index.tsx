import React from "react";
import { BsBell } from "react-icons/bs";

export const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <div className="logo">
          <img src="/assets/logo.svg" loading="lazy" alt="logo" />
        </div>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="search for anything" />
            <button className="search">
              <img src="/assets/search.svg" alt="" />
            </button>
          </form>
        </div>
        <div className="links">
          <div className="docs">Docs</div>
          <div className="notification">
            {/* <img src="/assets/bell.svg" alt="notifications" /> */}
            <BsBell />
          </div>
          <div className="profile">
            <div className="profile-pic">
              <img src="/assets/adedeji.svg" loading="lazy" alt="profile-pic" />
            </div>
            <div className="name__dropdown">
              <div className="name">Adedeji</div>
              <div className="dropdown">
                <img src="/assets/dropdown.svg" alt="fropdown" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
