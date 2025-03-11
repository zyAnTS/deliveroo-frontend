import React from "react";

import Product from "./Product";

const Products = ({ categories, index, basket, setBasket, cost, setCost }) => {
  return (
    <section key={categories.name + index}>
      <h2>{categories.name}</h2>
      <div className="products">
        {categories.meals.map((meals) => {
          return (
            <Product
              meals={meals}
              key={meals.id}
              basket={basket}
              setBasket={setBasket}
              cost={cost}
              setCost={setCost}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
