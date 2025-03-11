import React from "react";

const Product = ({ meals, basket, setBasket, cost, setCost }) => {
  meals.quantity = 0;

  return (
    <article
      key={meals.id}
      onClick={() => {
        meals.quantity += 1;
        const newBasket = [...basket];
        if (basket.includes(meals) !== true) {
          newBasket.push(meals);
        }
        setCost(cost + Math.floor(Number(meals.price)));
        setBasket(newBasket);
      }}
    >
      <div className="product">
        <h3>{meals.title}</h3>
        <p>{meals.description}</p>
        <div className="price">
          <p>{meals.price} €</p>
          {meals.popular && (
            <span>
              <img src="./star.png" alt="" />
              Popular
            </span>
          )}
        </div>
      </div>
      {meals.picture && <img src={meals.picture} alt="image" />}
    </article>
  );
};

export default Product;
