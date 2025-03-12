import React from "react";

const Basket = ({ basket, setBasket, cost, setCost }) => {
  // Calcul du prix total
  // autres méthodes que d'ajouter au clic sur le produit.
  //
  // BOUCLE FOR :
  // let total = 0;
  // for (let =i; i < basket.length ; i++) {
  // return
  // }
  //
  // REDUCE :

  return (
    <aside>
      {basket.length === 0 ? (
        <button className="disabled" disabled>
          Voir mon panier
        </button>
      ) : (
        <button>Valider mon panier</button>
      )}
      {basket.map((elem, index) => {
        return (
          <div className="basket-item" key={index}>
            <div className="quantity">
              <button
                onClick={() => {
                  const copy = [...basket];

                  // vérifier la quantité, sinon on coupe le produit à l'index du tableau
                  if (elem.quantity === 1) {
                    copy.splice(index, 1);
                  } else {
                    copy[index].quantity--;
                  }
                  setBasket(copy);
                  setCost(cost - Math.round(Number(elem.price)));
                }}
              >
                -
              </button>
              <p>{elem.quantity}</p>
              <button
                onClick={() => {
                  const copy = [...basket];

                  // on ajoute la quantité au produit à l'index du tableau
                  copy[index].quantity++;
                  setBasket(copy);
                  setCost(cost + Math.round(Number(elem.price)));
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
              <p>{cost.toFixed(2)} €</p>
            </div>
            <div className="basket-row">
              <p>Frais de livraison</p>
              <p>2,50 €</p>
            </div>
          </div>
          <div className="basket-total">
            <h3>Total</h3>
            <h3>{Number(cost + 2.5).toFixed(2)} €</h3>
          </div>
        </>
      )}
    </aside>
  );
};

export default Basket;
