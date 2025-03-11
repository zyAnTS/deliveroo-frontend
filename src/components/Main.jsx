import React from "react";

import Products from "./Products";
import Basket from "./Basket";

const Main = ({ data, basket, setBasket, cost, setCost }) => {
  return (
    <main>
      <div className="container">
        <div className="list">
          {data.categories.map((categories, index) => {
            return (
              <Products
                categories={categories}
                key={index}
                basket={basket}
                setBasket={setBasket}
                cost={cost}
                setCost={setCost}
              />
            );
          })}
        </div>
        <Basket
          basket={basket}
          setBasket={setBasket}
          cost={cost}
          setCost={setCost}
        />
      </div>
    </main>
  );
};

export default Main;
