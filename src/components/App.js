import React, { useEffect, useState } from "react";

import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const resData = await response.json();
        console.log(resData);
        setData(resData.products);
      } catch (err) {
        console.log("Oops!!..There was an error : ", err);
      }
    };
    getData();
  }, []);
  return (
    <div id="main">
      <h1>Data fetch</h1>
      {data.length > 0 &&
        data.map((item) => <pre key={item.id}>{item.title}</pre>)}
    </div>
  );
};

export default App;
