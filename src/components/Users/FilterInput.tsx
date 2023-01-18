import { useContext } from "react";
import { FilteringContext } from "./../../context/FilteringContext/index";
import { convertDate, option } from "./utilities";
import { UsersContext } from "./../../context/UsersContext/index";
import { FilteredSection } from "./FilteredSection";

const FilterInput = ({ handleCi, manual, closeFilter }: any) => {
  const {
    organization,
    setOrganization,
    name,
    setName,
    date,
    setDate,
    email,
    setEmail,
    phone,
    setPhone,
    status,
    setStatus,
  } = useContext(FilteringContext);
  const { users, filteredUsers, setFilteredUsers } = useContext(UsersContext);

  const handleStatus = (name: any) => {
    setStatus(name);
  };
  const handleReset = (e: any) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setOrganization("");
    setStatus("");
    setDate("");
    setPhone("");
    handleCi(1);
    setFilteredUsers(users);
    setTimeout(closeFilter, 300);
  };
  const filters: any = [];
  console.log(filters);
  const handleFiltersOption = () => {
    filters.push(name);
    filters.push(organization);
    filters.push(email);
    filters.push(phone);
    filters.push(status);
    if (date.length) {
      let newDate = convertDate(date);
      filters.push(newDate);
    } else {
      filters.push(date);
    }
  };
  handleFiltersOption();
  const handleFilter = (e: any) => {
    e.preventDefault();
    handleFiltersOption();
    setFilteredUsers(users);
    const newFilteredUsers = users.filter((user: any) => {
      const truthy = [];
      user.profile.firstName.toLowerCase().startsWith(filters[0]) ||
      !filters[0]?.length
        ? truthy.push(true)
        : truthy.push(false);
      user.orgName.toLowerCase().startsWith(filters[1].toLowerCase()) ||
      !filters[1]?.length
        ? truthy.push(true)
        : truthy.push(false);
      user.email.toLowerCase().includes(filters[2].toLowerCase()) ||
      !filters[2]?.length
        ? truthy.push(true)
        : truthy.push(false);
      user.phoneNumber.includes(filters[3]) || !filters[3]?.length
        ? truthy.push(true)
        : truthy.push(false);
      user.state?.status.includes(filters[4]) || !filters[4]?.length
        ? truthy.push(true)
        : truthy.push(false);
      user.createdAt.includes(filters[5].slice(0, 3)) || !filters[5]?.length
        ? truthy.push(true)
        : truthy.push(false);
      return (
        truthy[0] &&
        truthy[1] &&
        truthy[2] &&
        truthy[3] &&
        truthy[4] &&
        truthy[5]
      );
    });

    handleCi(!manual);
    setFilteredUsers(newFilteredUsers);
    setTimeout(closeFilter, 300);
  };

  return (
    <div className="filter-input">
      <form onSubmit={(e) => e.preventDefault}>
        <div className="form-container">
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            name="organization"
            id="organization"
            onChange={(e) => setOrganization(e.target.value)}
            value={organization}
          />
        </div>
        <div className="form-container">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            placeholder="user"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-container">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="date"
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div className="form-container">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="form-container select">
          <label htmlFor="status">Status</label>
          <select onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value="" disabled selected>
              Select
            </option>
            {option.map((x) => (
              <option value={x}>{x}</option>
            ))}
          </select>
          <img src="/assets/down-arrow.svg" alt="" />
        </div>
      </form>
      <div className="buttons">
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        <button className="filter-btn" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterInput;
