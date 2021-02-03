import React, { Component } from "react";
import { useLocation } from "react-router-dom";

const Resturent = (props) => {
  const { data } = useLocation().state;
  console.log(data);
  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-2  align-items-center">
          <h1 style={{ fontSize: "30px", fontWeight: "700", color: "#2D55C7" }}>
            {data.restaurant_name}
          </h1>
          <img style={{ width: "50%" }} src={data.image} alt="No Data Image" />
          <br />
          <span style={{ fontSize: "20px", fontWeight: "500" }}>
            Rating :{" "}
            <span style={{ color: "#2D55C7" }}>
              {data.rating.restaurant_avg_rating}
            </span>
          </span>
          <br />
          <span style={{ fontSize: "20px", fontWeight: "500" }}>
            Status : <span style={{ color: "#2D55C7" }}>{data.status}</span>
          </span>
          <br />
          <span style={{ fontSize: "20px", fontWeight: "500" }}>
            Location : <br />{" "}
            <span style={{ color: "#2D55C7" }}>
              {data.location.location_address}
            </span>
            <br />
            <span style={{ color: "#2D55C7" }}>
              {data.location.location_locality}
            </span>
            <br />
            <span style={{ color: "#2D55C7" }}>
              {data.location.location_zip_code}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Resturent;
