import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();
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
      {post.map((posts, index) => {
        return (
          <>
            <div className="container" style={{ height: "100vh" }}>
              <div
                onClick={() => {
                  navigate(`/posts/${posts.ID}`, { state: { posts } });
                }}
                key={posts.ID}
                style={{ width: "12rem", cursor: "pointer" }}
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
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cards;
