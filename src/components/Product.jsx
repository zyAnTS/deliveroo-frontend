import React from "react";

const Product = ({ meals, basket, setBasket, cost, setCost }) => {
  return (
    <article
      key={meals.id}
      onClick={() => {
        const copy = [...basket];

        // vérifier si l'élément existe
        const foundElement = copy.find((elem) => elem.id === meals.id);

        if (foundElement) {
          foundElement.quantity += 1;
        } else {
          copy.push({ ...meals, quantity: 1 });
        }

        setBasket(copy);
        setCost(cost + Math.round(Number(meals.price)));
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
