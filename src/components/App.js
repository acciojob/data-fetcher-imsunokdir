import React, { useEffect, useState } from "react";

import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const resData = await response.json();
        console.log(resData);
        setData(resData);
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
      <h1>Data Fetched from API</h1>

      {error ? (
        <h2>An error occurred</h2>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <h3>No data found</h3>
      )}
    </div>
  );
};

export default App;
