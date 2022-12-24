import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Posts.module.css";
const Posts = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { posts } = state || {};
  // console.log(state);
  // const ping = location.state.posts;
  // console.log(posts.posts.TITLE);

  return (
    <>
      <div
        className="container p-3  "
        style={{ height: "100%", minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col d-flex justify-content-center " style={{}}>
            <img
              style={{ height: "30rem", width: "auto" }}
              src={posts.COVER}
              alt=""
            />
          </div>

          <div className="col d-flex justify-content-center mt-2">
            <div>
              <h4>
                {posts.TITLE} ({posts.YEAR})
              </h4>
              <h6>AUTHOR : {posts.PUBLISHER}</h6>
              <h6>PAGES : {posts.PAGES}</h6>
              <h6>
                DESCRIPTION : <p>{posts.DESCRIPTION}</p>
              </h6>

              <div className={styles.wrapper}>
                <p
                  onClick={() => {
                    navigate(`/reader/${posts.ID}/${posts.TITLE}`, {
                      state: { posts },
                    });
                  }}
                  className={styles.btn}
                >
                  <span>Read Now</span>
                </p>
              </div>
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
