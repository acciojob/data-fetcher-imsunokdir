import React, { useEffect, useState } from "react";

import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const resData = await response.json();
        console.log(resData);
        setData(resData.products);
        setError(null);
      } catch (err) {
        setError(err);
        console.log("Oops!!..There was an error : ", err);
      }
    };
    getData();
  }, []);
  return (
    <div id="main">
      <h1>Data fetch</h1>
      {data.length > 0 ? (
        data.map((item) => <pre key={item.id}>{item.title}</pre>)
      ) : (
        <h3>No data found</h3>
      )}
      {error && <h2>An error occurred: {error}</h2>}
    </div>
  );
};

export default App;
