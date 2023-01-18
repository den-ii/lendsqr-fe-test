import { FilteredSection } from "../../components/Users/FilteredSection";
import { UsersNum } from "../../components/Users/UsersNum";
export const Users = () => {
  return (
    <div className="users">
      <div className="heading">Users</div>
      <div className="usersNum">
        <UsersNum />
      </div>
      <div className="filteredSection">
        <FilteredSection />
      </div>
    </div>
  );
};
