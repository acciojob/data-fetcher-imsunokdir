import React, { useEffect, useState } from "react";

import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const resData = await response.json();
      console.log(resData);

      setData(resData);
    };
    getData();
  }, []);
  return <div id="main"></div>;
};

export default App;
