import React, { Component } from "react";
import { useHistory } from "react-router-dom";
const ResturentCard = ({ value }) => {
  const history = useHistory();
  return (
    <div className="card shadow mb-4">
      <h3>{value.restaurant_name}</h3>
      <div
        className="m-4"
        onClick={() => {
          history.push("/resturent", {
            data: value,
          });
        }}
      >
        <img
          alt={"resturent Image"}
          style={{ width: 500, height: 400 }}
          src={value.cover_image}
        />
      </div>
    </div>
  );
};

export default ResturentCard;
