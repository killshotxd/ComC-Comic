import axios from "axios";
import React, { useEffect, useState } from "react";

const Cards = () => {
  const API = "https://webcom-api.vercel.app/";

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(API).then((response) => {
      //   console.log(response.data);
      setPost(response.data);
    });
  }, []);
  return <div>{/* <h1>{post.TITLE}</h1> */}</div>;
};

export default Cards;
