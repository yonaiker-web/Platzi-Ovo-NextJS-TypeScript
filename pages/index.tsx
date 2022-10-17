import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [productList, setproductList] = useState<TProduct>([] as any);

  useEffect(() => {
    window
      //hacemos el llamado a la api
      .fetch("api/avo")
      //convertimos la respuesta en un json
      .then((response) => response.json())
      //destructuramos el objeto y se lo agregamos al state
      .then(({ data, length }) => setproductList(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div>Que hay de nuevo viejo</div>
      {productList.map((product) => (
        <div className="">{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
