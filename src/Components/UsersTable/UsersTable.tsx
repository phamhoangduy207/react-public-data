import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeConsumer } from "../../Contexts/ThemeContext";

const columns = [
  { field: "id", headerName: "ID", width: 70,  },
  { field: "name", headerName: "Name", width: 130 },
  { field: "username", headerName: "Username", width: 130 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "website", headerName: "Website", width: 130 },
  {
    field: "comBine",
    headerName: "Contact",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
    valueGetter: (params: any) =>
      `${params.getValue(params.id, "name") || ""} 
      ${params.getValue(params.id, "phone") || ""}`,
  },
];

export default function Users() {
  const [data, setData] = useState({
    items: [],
    pageSize: 0,
    isLoaded: false,
  });

  useEffect(() => {
    const axios = require("axios");
    async function getData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setData({
          items: response.data,
          pageSize: 5,
          isLoaded: true,
        });
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  function handleChange(e: any) {
    setData({
      items: data.items,
      pageSize: parseInt(e.target.value),
      isLoaded: true,
    });
  }

  const DataisLoaded = data.isLoaded;
  if (!DataisLoaded)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <ThemeConsumer>
      {(props) => {
        return (
          <div style={{ background: props!.background, color: props!.color }}>
            <select onChange={(event) => handleChange(event)}>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={data.items}
                columns={columns}
                pageSize={data.pageSize}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </div>
        );
      }}
    </ThemeConsumer>
  );
}
