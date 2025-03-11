import React from "react";

const Basket = ({ basket, setBasket, cost, setCost }) => {
  return (
    <aside>
      {basket.length === 0 ? (
        <button className="disabled">Voir mon panier</button>
      ) : (
        <button>Valider mon panier</button>
      )}
      {basket.map((elem, index) => {
        return (
          <div className="basket-item" key={index}>
            <div className="quantity">
              <button
                onClick={() => {
                  elem.quantity -= 1;
                  const newBasket = [...basket];
                  if (elem.quantity === 0) {
                    newBasket.splice(elem);
                  }
                  setCost(cost - Math.floor(Number(elem.price)));
                  setBasket(newBasket);
                }}
              >
                -
              </button>
              <p>{elem.quantity}</p>
              <button
                onClick={() => {
                  elem.quantity += 1;

                  setCost(cost + Math.floor(Number(elem.price)));
                  setBasket(newBasket);
                }}
              >
                +
              </button>
            </div>
            <p>{elem.title}</p>
            <p>{Number(elem.price).toFixed(2)} €</p>
          </div>
        );
      })}
      {basket.length === 0 ? (
        <>
          <div className="basket-empty">Votre panier est vide</div>
        </>
      ) : (
        <>
          <div className="basket-options">
            <div className="basket-row">
              <p>Sous-total</p>
              <p>{cost}</p>
            </div>
            <div className="basket-row">
              <p>Frais de livraison</p>
              <p>2,50 €</p>
            </div>
          </div>
          <div className="basket-total">
            <h3>Total</h3>
            <h3>{cost + 2.5} €</h3>
          </div>
        </>
      )}
    </aside>
  );
};

export default Basket;
