import React from "react";
import PagesLink from "../PagesLink";
import { Data } from "../ProductData";
import { ProductCard } from "../Cards";
import Loginpage from "../Login/Loginpage";

export const Product = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <PagesLink />
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px 30px",
        }}
      >
        {Data.map((e, i) => {
          return (
            <ProductCard
              img={e.image}
              title={e.title}
              dis={e.description}
              key={e.id}
              productId={e.id}
            />
          );
        })}
      </div>
    </div>
  );
};
