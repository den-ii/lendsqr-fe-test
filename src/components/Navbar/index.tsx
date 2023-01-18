import React, { useState } from "react";
import { BsBell } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrDocumentText } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

export const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const burgerClass = burger ? "burger-none" : "";
  return (
    <header className="navbar">
      <nav className="big">
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
      <nav className="mobile">
        <div className="head-container">
          <div className="logo">
            <img src="/assets/logo.svg" loading="lazy" alt="logo" />
          </div>
          <div className="burger" onClick={() => setBurger(!burger)}>
            <HiOutlineMenuAlt3 />
          </div>
        </div>
        <div className={`burger-dropdown ${burgerClass}`}>
          <div className="docs">
            <GrDocumentText />
            <span>Docs</span>
          </div>
          <div className="notification">
            <FaRegUser />
            <span>Notification</span>
          </div>
          <div className="profile">
            <FaRegUser />
            <span>Profile</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
