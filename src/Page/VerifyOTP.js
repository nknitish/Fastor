import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
var qs = require("qs");

const VeryifyOTP = () => {
  const history = useHistory();
  const [otp, setOtp] = useState();
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const [msg, setMsg] = useState("");
  const [disable, setDisable] = useState(false);

  const sucessdiv = (
    <div className="alert alert-success" role="alert">
      <i className="fa fa-check" aria-hidden="true"></i>
      &nbsp;{msg}
    </div>
  );
  const errordiv = (
    <div className="alert alert-danger" role="alert">
      <i className="fa fa-times" aria-hidden="true"></i>
      &nbsp; {msg}
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    var data = qs.stringify({
      phone: "9818979450",
      otp: otp,
      dial_code: "+91",
      "": "",
    });
    var config = {
      method: "post",
      url: "https://staging.fastor.in/v1/pwa/user/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        if (response.data.status === "Success") {
          localStorage.setItem("token", response.data.data.token);
          setMsg("OTP Verified");
          setError(false);
          setSucess(true);
          setTimeout(() => {
            history.push(`/resturentlist`);
          }, 3000);
        } else {
          setMsg("Invalid OTP. Please Enter Correct OTP");
          setSucess(false);
          setError(true);
          setTimeout(() => {
            setDisable(false);
            setOtp("");
            setError(false);
            setSucess(false);
            setMsg("");
          }, 3000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      {sucess && sucessdiv}
      {error && errordiv}
      <h1>Enter OTP </h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => setOtp(e.target.value)}
          type="number"
        />
        <button type="submit" disabled={disable} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default VeryifyOTP;
