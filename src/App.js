import React, { useState, useEffect } from "react";
import "./App.css";
import Time from "./Components/Time/Time";

const axios = require('axios');

function App(props) {
  const [data, setData] = useState({
    items: [],
    isLoaded: false,
  });

  async function getData(){
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data);
      setData({
        items: response.data,
        isLoaded: true
      })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const DataisLoaded  = data.isLoaded;
  if (!DataisLoaded)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="App">
      <Time />
      <h1> Users </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Full name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
