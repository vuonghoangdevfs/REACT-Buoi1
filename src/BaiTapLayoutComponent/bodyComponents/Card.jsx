import React from "react";

const Card = (props) => {
  return (
    <div className="card bg-light border-0 h-100">
      <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
        <div
          className="feature bg-primary bg-gradient text-white rounded-3 mb-4"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "4rem",
            width: "4rem",
            fontSize: "2rem",
            marginTop: "-1.5rem",
          }}
        >
          <i className={`bi ${props.icon}`} />
        </div>
        <h2 className="fs-4 fw-bold">{props.title}</h2>
        <p className="mb-0">{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
