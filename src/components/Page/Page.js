import React from "react";
import "./page.scss";

export default function Page({ data }) {
  // console.log(props);
  return (
    <>
      {/* Book */}

      <div className="book">
        <div className="page_current">
          <div className="partition"></div>
          <div className="page_current_back">
            <h1>{data?.title}</h1>
            <br />
            <br />
            <h3>{data?.content}</h3>
          </div>
          <div className="page_current_front">
            <h1>{data?.title}</h1>
            <br />
            <br />
            <h3>{data?.content}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
