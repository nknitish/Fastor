import React, { useState, useEffect } from "react";

import ResturentCard from "./../component/ResturentCard";
import axios from "axios";
var qs = require("qs");

const VeryifyOTP = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var data = qs.stringify({});
    var config = {
      method: "get",
      url: "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("resturent List", response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <h1>Resturent List </h1>
          {loading ? (
            <div
              style={{
                width: "17px",
                height: "17px",
                fontSize: "8px",
              }}
              class="spinner-border text-primary mb-2 ml-2"
              role="status"
            />
          ) : (
            data.map((value, key) => <ResturentCard key={key} value={value} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default VeryifyOTP;
