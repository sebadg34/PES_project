
import React from "react";
import axios from 'axios';
const Authenticate = async () => {
    const url = "localhost:8000/api/check";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await res.json();
  console.log(data);
    return data;
  };

export default Authenticate;