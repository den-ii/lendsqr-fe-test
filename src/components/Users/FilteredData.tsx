import ViewDetailsModal from "./ViewDetailsModal";
import { useState } from "react";
import useDropoff from "./../../hooks/useDropOff";

export const FilteredData = ({ data }: any) => {
  const [viewModal, setViewModal] = useState(false);

  const handleViewModal = () => {
    setViewModal(true);
  };
  const closeViewModal = () => {
    setViewModal(false);
  };
  const viewRef = useDropoff(closeViewModal);

  return (
    <div className="profile">
      <div title={data.orgName}>{data.orgName.slice(0, 18)}</div>
      <div
        title={`${data.profile.firstName} ${data.profile.lastName}`}
      >{`${data.profile.firstName} ${data.profile.lastName}`}</div>
      <div className="email" title={data.email}>
        {data.email}
      </div>
      <div className="phone" title={data.phoneNumber}>
        {data.phoneNumber}
      </div>
      <div>{data.createdAt}</div>
      <div onClick={handleViewModal} ref={viewRef}>
        {viewModal && (
          <div>
            <ViewDetailsModal id={data.id} />
          </div>
        )}
        <div className={`is${data.state?.status}`}>
          <span>{data.state?.status}</span>
          <img src="/assets/threedots.svg" />
        </div>
      </div>
    </div>
  );
};
