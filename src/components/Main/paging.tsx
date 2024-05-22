import React from "react";
import "./paging.scss";

function Paging({ setNext, lists }) {
  const handleSetData = (text) => {
    if (text === "next") {
      setNext(lists.next);
    } else if (text === "prev") {
      setNext(lists.previous);
    }
  };

  return (
    <div className="pagingWrap">
      <div
        className="pagingArrow"
        onClick={() => handleSetData("prev")}
        style={lists?.previous ? {} : { opacity: 0.5 }}
      >
        {"<"}
      </div>
      <div className="pagingArrow" onClick={() => handleSetData("next")} style={lists?.next ? {} : { opacity: 0.5 }}>
        {">"}
      </div>
    </div>
  );
}

export default Paging;
