import React from "react";
import PagesLink from "../PagesLink";
import { useParams } from "react-router-dom";
import { Data } from "../ProductData";

export const Singlepro = () => {
  const { id } = useParams();

  const filterData = Data.filter((e, i) => {
    return e.id == id;
  });

  return (
    <div style={{ marginTop: "80px" }}>
      <PagesLink />
      <br />
      <h1 style={{ textAlign: "center" }}>SinglePro</h1>
      <hr />
      {filterData.map((e, i) => {
        return (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "2rem 5rem",
              gap: "3%",
            }}
          >
            <br />
            <div>
              <img
                src={e.image}
                alt="Product Image"
                style={{
                  height: "500px",
                  borderRadius: "10px",
                  padding: "0.3rem 0.7rem",
                  boxShadow: "0 0 10px black",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                alignItems: "start",
              }}
            >
              <h1>{e.title}</h1>
              <br />
              <b style={{ textAlign: "start" }}>{e.description}</b>
              <p style={{ textAlign: "start" }}>{e.description}</p>
              <br />
              <button className="btn btn-outline-dark fw-bolder">
                Price : ${e.price}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
