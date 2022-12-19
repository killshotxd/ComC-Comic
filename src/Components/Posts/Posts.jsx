import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const Posts = () => {
  // const location = useLocation();
  const { state } = useLocation();
  const { posts } = state || {};
  console.log(state);
  // const ping = location.state.posts;
  // console.log(posts.posts.TITLE);

  return (
    <>
      <div
        className="container p-3 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col d-flex" style={{ gap: "3rem" }}>
            <div>
              <img src={posts.COVER} alt="" />
            </div>
            <div>
              <h4>
                {posts.TITLE} ({posts.YEAR})
              </h4>
              <h6>AUTHOR : {posts.PUBLISHER}</h6>
              <h6>PAGES : {posts.PAGES}</h6>
              <h6>
                DESCRIPTION : <p>{posts.DESCRIPTION}</p>
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* {ping.map((pings) => {
        return (
          <>
            
          </>
        );
      })} */}
    </>
  );
};

export default Posts;
