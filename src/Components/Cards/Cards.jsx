import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();
  const API = "https://webcom-api.vercel.app/";

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(API, { crossdomain: true }).then((response) => {
      //   console.log(response.data);
      setPost(response.data);
    });
  }, []);
  return (
    <>
      <div
        className="container d-flex flex-wrap pb-5 justify-content-center"
        style={{ height: "100%", gap: "3rem", minHeight: "100vh" }}
      >
        {post.map((posts, index) => {
          return (
            <>
              <div
                onClick={() => {
                  navigate(`/posts/${posts.ID}`, { state: { posts } });
                }}
                key={posts.ID}
                style={{
                  width: "12rem",
                  cursor: "pointer",
                  height: "21rem",
                  border: "2px solid gold",
                }}
                className="card p-2 mt-4"
              >
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
