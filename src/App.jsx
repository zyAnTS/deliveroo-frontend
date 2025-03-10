import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import "./assets/fonts/stylesheet.css";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  });

  return isLoading ? (
    <>
      <p>Chargement...</p>
    </>
  ) : (
    <>
      <header>
        <img src="/logo.png" alt="Logo Deliveroo" />
      </header>
      <div className="title">
        <div className="store">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img
          src={data.restaurant.picture}
          alt="Photo de présentation du restaurant"
        />
      </div>
      <main>
        {data.categories.map((elem, index) => {
          return (
            <section key={elem.name + index}>
              <h2>{elem.name}</h2>

              {elem.meals.map((elem) => {
                return (
                  <article>
                    <div className="product" key={elem.id}>
                      <h3>{elem.title}</h3>
                      <p>{elem.description}</p>
                      <div className="price">
                        <p>{elem.price} €</p>
                        {elem.popular && <span>Popular</span>}
                      </div>
                    </div>
                    {elem.picture && <img src={elem.picture} alt="image" />}
                  </article>
                );
              })}
            </section>
          );
        })}
      </main>
      <footer>
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>Yann Treuiller-Schlachter</span>
      </footer>
    </>
  );
}

export default App;
