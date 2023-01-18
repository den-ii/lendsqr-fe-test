import { useContext } from "react";
import { children, maritalStatus, NGN, residence } from "./utilities";
import { UsersContext } from "./../../context/UsersContext/index";

const GeneralUserDetails = () => {
  const { active, blacklist } = useContext(UsersContext);
  const value = localStorage.getItem("userDetail");

  const userDetail = typeof value === "string" ? JSON.parse(value) : "";

  return (
    <div className="general-user-details">
      <section>
        <div className="description">Personal Information</div>
        <div className="details-container">
          <div className="details">
            <div className="top">FULLNAME</div>
            <div className="bottom">{`${userDetail.profile.firstName} ${userDetail.profile.lastName}`}</div>
          </div>
          <div className="details">
            <div className="top">PHONE NUMBER</div>
            <div className="bottom">{userDetail.phoneNumber}</div>
          </div>

          <div className="details">
            <div className="top">EMAIL ADDRESS</div>
            <div className="bottom">{userDetail.email}</div>
          </div>

          <div className="details">
            <div className="top">BVN</div>
            <div className="bottom">{userDetail.profile.bvn}</div>
          </div>

          <div className="details">
            <div className="top">GENDER</div>
            <div className="bottom">{userDetail.profile.gender}</div>
          </div>
          <div className="details">
            <div className="top">MARITAL STATUS</div>
            <div className="bottom">
              {maritalStatus[Math.floor(Math.random() * 3)]}
            </div>
          </div>
          <div className="details">
            <div className="top">CHILDREN</div>
            <div className="bottom">
              {children[Math.floor(Math.random() * 4)]}
            </div>
          </div>
          <div className="details">
            <div className="top">TYPE OF RESIDENCE</div>
            <div className="bottom">
              {residence[Math.floor(Math.random() * 3)]}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="description">Education and Employment</div>
        <div className="details-container">
          <div className="details">
            <div className="top">LEVEL OF EDUCATION</div>
            <div className="bottom">{userDetail.education.level}</div>
          </div>
          <div className="details">
            <div className="top">EMPLOYMENT STATUS</div>
            <div className="bottom">
              {userDetail.education.employmentStatus}
            </div>
          </div>

          <div className="details">
            <div className="top">SECTOR OF EMPLOYMENT</div>
            <div className="bottom">{userDetail.education.sector}</div>
          </div>

          <div className="details">
            <div className="top">DURATION OF EMPLOYMENT</div>
            <div className="bottom">
              {userDetail.education.employmentStatus}
            </div>
          </div>

          <div className="details">
            <div className="top">OFFICE EMAIL</div>
            <div className="bottom">{userDetail.education.officeEmail}</div>
          </div>
          <div className="details">
            <div className="top">MONTHLY INCOME</div>
            <div className="bottom">{`${NGN.format(
              userDetail.education.monthlyIncome[0]
            )} - ${NGN.format(userDetail.education.monthlyIncome[1])}`}</div>
          </div>
          <div className="details">
            <div className="top">LOAN REPAYMENT</div>
            <div className="bottom">{userDetail.education.loanRepayment}</div>
          </div>
        </div>
      </section>
      <section>
        <div className="description">Socials</div>
        <div className="details-container">
          <div className="details">
            <div className="top">TWITTER</div>
            <div className="bottom">{userDetail.socials.twitter}</div>
          </div>
          <div className="details">
            <div className="top">FACEBOOK</div>
            <div className="bottom">{userDetail.socials.facebook}</div>
          </div>

          <div className="details">
            <div className="top">INSTAGRAM</div>
            <div className="bottom">{userDetail.socials.instagram}</div>
          </div>
        </div>
      </section>
      <section>
        <div className="description">Guarantor</div>
        <div className="details-container">
          <div className="details">
            <div className="top">FULL NAME</div>
            <div className="bottom">{`${userDetail.guarantor.firstName} ${userDetail.guarantor.lastName}`}</div>
          </div>
          <div className="details">
            <div className="top">PHONE NUMBER</div>
            <div className="bottom">{userDetail.guarantor.phoneNumber}</div>
          </div>

          <div className="details">
            <div className="top">EMAIL ADDRESS</div>
            <div className="bottom">
              {userDetail.guarantor.email ? userDetail.guarantor.email : "null"}
            </div>
          </div>
          <div className="details">
            <div className="top">RELATIONSHIP</div>
            <div className="bottom">Sister</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralUserDetails;
