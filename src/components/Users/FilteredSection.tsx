import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
import { FilteredData } from "./FilteredData";
import Paginate from "./Paginate";

const Heading = [
  "ORGANIZATION",
  "USERNAME",
  "EMAIL",
  "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
];
type UsersTypes = {
  users: any;
};
const HeadingArr = Heading.map((x: string) => (
  <div className={`headers ${x.slice(0, 5).toLowerCase()}`}>
    <div className="allusers">{x}</div>
    <div>
      <img src="/assets/filter.svg" alt="filter" />
    </div>
  </div>
));

export const FilteredSection = () => {
  const { users, filteredUsers } = useContext(UsersContext);
  const [currentItems, setCurrentItems] = useState(users);

  const handleCurrentItems = (items: any) => {
    setCurrentItems(items);
  };

  const Items = currentItems.map((item: any) => <FilteredData data={item} />);

  // console.log(filteredUsers);
  return (
    <section className="filtered-section">
      <div className="main-container">
        <div className="main">
          <div className="heading">{HeadingArr}</div>
          {Items}
        </div>
      </div>
      <div className="pagination-container">
        <Paginate
          itemsPerPage={10}
          items={filteredUsers}
          handleCurrentItems={handleCurrentItems}
        />
      </div>
    </section>
  );
};
