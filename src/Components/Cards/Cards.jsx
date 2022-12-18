import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const API = "https://webcom-api.vercel.app/";

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(API).then((response) => {
      //   console.log(response.data);
      setPost(response.data);
    });
  }, []);
  return (
    <>
      {post.map((posts) => {
        return (
          <>
            <div className="container" style={{ height: "100vh" }}>
              <Link to="${posts.TITLE/ID}">
                <div style={{ width: "12rem" }} className="card p-2 mt-4">
                  <img
                    className=""
                    style={{ height: "15rem", width: "auto" }}
                    src={posts.COVER}
                    alt=""
                  />
                  <p className="text-center mt-2">
                    {posts.TITLE} ({posts.YEAR})
                  </p>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cards;
