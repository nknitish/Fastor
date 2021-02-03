import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
var qs = require("qs");

const LoginPage = () => {
  const history = useHistory();
  const [mobileno, setMobilenumber] = useState();
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
      phone: mobileno,
      dial_code: "+91",
    });
    var config = {
      method: "post",
      url: "https://staging.fastor.in/v1/pwa/user/register",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        if (response.data.status === "Success") {
          setMsg(response.data.data);
          setError(false);
          setSucess(true);
          setTimeout(() => {
            history.push(`/verifyotp`);
          }, 4000);
        } else {
          setMsg(response.data.error_message);
          setSucess(false);
          setError(true);
          setTimeout(() => {
            setDisable(false);
            setMobilenumber("");
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
      <h2>Enter Mobile Number</h2>

      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => setMobilenumber(e.target.value)}
          type="number"
        />
        <button type="submit" disabled={disable} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginPage;
