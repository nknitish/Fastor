import React from "react";

// import "./style.css";
const DesignPage = () => {
  return (
    <>
      <div style={{ paddingTop: "20px", paddingLeft: "30px" }}>
        {" "}
        <div class="card p-2 " style={{ width: "19rem", borderRadius: "5%" }}>
          <div>
            <img
              class="card-img-top"
              style={{ borderRadius: "10%" }}
              src={window.location.origin + "/assets/img1.jpg"}
              alt="hi"
            />
          </div>

          <div class="card-body">
            <button
              type="button"
              class="btn btn-sm  btn-light btn btn-outline-dark"
              style={{ lineHeight: "10px" }}
            >
              <span style={{ fontWeight: "700", color: "black" }}>NEW</span>
            </button>
            <h5 class="card-title">
              <span
                style={{
                  fontFamily: "inherit",
                  fontWeight: "700",
                  color: "black",
                  fontSize: "35px",
                }}
              >
                Renault
              </span>{" "}
              <br></br>
              <span
                style={{
                  fontFamily: "inherit",
                  fontWeight: "400",
                  color: "black",
                  fontSize: "35px",
                }}
              >
                Arkana
              </span>
            </h5>
            <p
              class="card-text"
              style={{
                fontFamily: "inherit",
                fontWeight: "600",
                color: "black",
                fontSize: "15px",
              }}
            >
              The Renault Arkana is a compact <br />
              (C-segment) crossover
            </p>
            <div class="row">
              <div className="col-9">
                <button
                  type="button"
                  style={{
                    width: "180px",
                    backgroundColor: "#FAAC30",
                    lineHeight: "27px",
                  }}
                  class="btn  btn-lg"
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    BOOK A CAR
                  </span>
                </button>
              </div>
              <div className="col-2">
                <button
                  class="btn btn-lg "
                  style={{ backgroundColor: "#D1D6DA" }}
                >
                  <i class="fa fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
