import React, { useContext, useState } from "react";
import { BsBell } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoDocumentOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import useDropoff from "../../hooks/useDropOff";
import { UsersContext } from "../../context/UsersContext";

export const Navbar = () => {
  const { users, setFilteredUsers } = useContext(UsersContext);
  const [burger, setBurger] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e:any) => {
    e.preventDefault();
    const searchFilter = users.filter((user: any) => {
      if (
        user.profile?.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.profile?.firstName.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      } else if (user.orgName?.toLowerCase().includes(search.toLowerCase())) {
        return true;
      } else if (user.email?.toLowerCase().includes(search.toLowerCase())) {
        return true;
      } else return false;
    });
    setFilteredUsers(searchFilter);
  };
  const closeBurgerMenu = () => {
    setBurger(false);
  };

  const burgerMenuRef = useDropoff(closeBurgerMenu);

  const burgerClass = burger ? "burger-none" : "";
  return (
    <header className="navbar">
      <nav className="big">
        <div className="logo">
          <img src="/assets/logo.svg" loading="lazy" alt="nav-logo" />
        </div>
        <div className="search-bar">
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              type="text"
              placeholder="search for anything"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleSearch}
            />
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
      <nav ref={burgerMenuRef} className="mobile">
        <div className="head-container">
          <div className="logo">
            <img src="/assets/logo.svg" loading="lazy" alt="logo" />
          </div>
          <div
            className="burger"
            role="burger"
            onClick={() => setBurger(!burger)}
          >
            <HiOutlineMenuAlt3 />
          </div>
        </div>
        <div className={`burger-dropdown ${burgerClass}`}>
          <form className="mobile-form" onSubmit={(e) => e.preventDefault}>
            <input
              type="text"
              placeholder="search for anything"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleSearch}
            />
          </form>
          <div className="docs">
            <IoDocumentOutline />
            <span>Docs</span>
          </div>
          <div className="notification">
            <IoNotificationsOutline />
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
