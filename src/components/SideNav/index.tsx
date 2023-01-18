import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

export const SideNav = () => {
  const [mobile, setMobile] = useState(true);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };
  const mobileClass = mobile ? "mobile-active" : "mobile-inactive";
  return (
    <div className="side-nav">
      <div></div>
      <nav className={`${mobileClass}`}>
        <div
          className={`arrow-mobile ${mobileClass}`}
          onClick={() => setMobile(!mobile)}
        >
          <HiOutlineArrowRight />
        </div>
        <div className="organization">
          <img src="/assets/briefcase.svg" loading="lazy" alt="organizations" />
          <p>Switch Organization</p>
          <img src="/assets/dropdown2.svg" loading="lazy" />
        </div>
        <NavLink className="side-link dashboard" to="/dashboard/home">
          <img src="/assets/home.svg" loading="lazy" alt="organizations" />
          <p>Dashboard</p>
        </NavLink>

        {/* CUSTOMERS */}

        <div className="customers">
          <div className="heading">CUSTOMERS</div>
          <ul>
            <li>
              <NavLink className="side-link" to="/dashboard/users">
                <img
                  src="/assets/user-friends.svg"
                  loading="lazy"
                  alt="users"
                />
                <p>Users</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/guarantors">
                <img
                  src="/assets/guarantors.svg"
                  loading="lazy"
                  alt="guarantors"
                />
                <p>Guarantors</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/loans">
                <img src="/assets/sack.svg" loading="lazy" alt="loans" />
                <p>Loans</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/decisions">
                <img
                  src="/assets/handshake-regular.svg"
                  loading="lazy"
                  alt="decisions"
                />
                <p>Decision Models</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/savings">
                <img
                  src="/assets/piggy-bank.svg"
                  loading="lazy"
                  alt="savings"
                />
                <p> Savings</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/loanreq">
                <img src="/assets/loanreq.svg" loading="lazy" alt="loan" />

                <p>Loan Requests</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/whitelist">
                <img
                  src="/assets/user-check.svg"
                  loading="lazy"
                  alt="white-list"
                />
                <p>Whitelist</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/karma">
                <img src="/assets/user-times.svg" loading="lazy" alt="karma" />
                <p>Karma</p>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* BUSINESS */}

        <div className="business">
          <div className="heading">BUSINESS</div>
          <ul>
            <li>
              <NavLink className="side-link" to="/dashboard/organization">
                <img
                  src="/assets/briefcase.svg"
                  loading="lazy"
                  alt="organization"
                />
                <p>Organization</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/loanproducts">
                <img
                  src="/assets/loanreq.svg"
                  loading="lazy"
                  alt="loan products"
                />
                <p>Loan Products</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/savingsproducts">
                <img
                  src="/assets/savings.svg"
                  loading="lazy"
                  alt="savingsproducts"
                />
                <p>Savings Products</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/fees_charges">
                <img
                  src="/assets/fees.svg"
                  loading="lazy"
                  alt="fees & charges"
                />
                <p>Fees and Charges</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/transactions">
                <img
                  src="/assets/transaction.svg"
                  loading="lazy"
                  alt="transactions"
                />
                <p>Transactions</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/services">
                <img src="/assets/services.svg" loading="lazy" alt="services" />

                <p>Services</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/service_acc">
                <img
                  src="/assets/service-acc.svg"
                  loading="lazy"
                  alt="service-account"
                />
                <p>Service Account</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/settlements">
                <img
                  src="/assets/settlements.svg"
                  loading="lazy"
                  alt="settlements"
                />
                <p>Settlements</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/reports">
                <img
                  src="/assets/settlements.svg"
                  loading="lazy"
                  alt="reports"
                />
                <p>Reports</p>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* BUSINESS */}

        <div className="business">
          <div className="heading">SETTINGS</div>
          <ul>
            <li>
              <NavLink className="side-link" to="/dashboard/organization">
                <img
                  src="/assets/preferences.svg"
                  loading="lazy"
                  alt="organization"
                />
                <p>Preferences</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/loanproducts">
                <img src="/assets/fp.svg" loading="lazy" alt="loan products" />
                <p>Fees and Pricing</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="/dashboard/savingsproducts">
                <img src="/assets/audit.svg" loading="lazy" alt="audit logs" />
                <p>Audit Logs</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="logout-container">
          <div className="logout" onClick={handleLogout}>
            <img src="/assets/sign-out.svg" />
            LogOut
          </div>
          <div>v1.2.0</div>
        </div>
      </nav>
    </div>
  );
};
