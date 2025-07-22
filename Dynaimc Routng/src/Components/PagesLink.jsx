import React from "react";
import { useNavigate } from "react-router-dom";

const PagesLink = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        position: "fixed",
        width: "100%",
        zIndex: "1",
        marginTop: "-80px",
        backgroundColor: "lightgray",
        padding: "0.5rem 0rem",
        boxShadow: "0 0 10px black",
      }}
    >
      <h1>Your Business</h1>
      <div style={{ gap: "30px", display: "flex" }}>
        <button
          className="btn btn-outline-success"
          onClick={() => navigate("/")}
        >
          Login
        </button>
        <button
          className="btn  btn-outline-success"
          onClick={() => navigate("/product")}
        >
          Products
        </button>
      </div>
    </div>
  );
};

export default PagesLink;
