import { useContext, useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { FilteredData } from "./FilteredData";
import FilterInput from "./FilterInput";
import useDropoff from "./../../hooks/useDropOff";
import { UsersContext } from "./../../context/UsersContext/";

export default function PaginatedItems({
  itemsPerPage,
  items,
  handleCurrentItems,
}: any) {
  const { filteredUsers } = useContext(UsersContext);
  const [filter, setFilter] = useState(false);
  const toggleFilter = () => {
    setFilter(true);
  };
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [manualreRerender, setmanualRerender] = useState(false);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);

  useEffect(() => {
    handleCurrentItems(currentItems);
  }, [itemOffset, items]);

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  const closeFilter = () => {
    setFilter(false);
  };
  const myRef = useDropoff(closeFilter);

  return (
    <>
      <div className="filtering">
        <div className="filter-container" ref={myRef} onClick={toggleFilter}>
          {filter && (
            <FilterInput
              handleCi={setmanualRerender}
              manual={manualreRerender}
              closeFilter={closeFilter}
            />
          )}
          <span>Showing</span>
          <button className="filter">
            <span>{items.length}</span>
            <img src="\assets\down-arrow.svg" />
          </button>
          <span>out of 100</span>
        </div>
        <ReactPaginate
          className="pagination"
          pageLinkClassName="pagination-link"
          activeLinkClassName="active-page"
          breakLabel="..."
          previousLabel="<"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}
