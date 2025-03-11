import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";
import "./assets/fonts/stylesheet.css";

import Loading from "./components/Loading";
import Header from "./components/Header";
import Title from "./components/Title";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [cost, setCost] = useState(0);

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
      <Loading />
    </>
  ) : (
    <>
      <Header />
      <Title data={data} />
      <Main
        data={data}
        basket={basket}
        setBasket={setBasket}
        cost={cost}
        setCost={setCost}
      />
      <Footer />
    </>
  );
}

export default App;
