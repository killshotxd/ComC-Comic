import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const Posts = () => {
  const location = useLocation();
  const state = location.state;
  //   const [postF, setPostF] = useState(state);
  console.log(state);
  return (
    <>
      {/* {state.map((states) => {
        return (
          <>
            <p>{states.TITLE}</p>
          </>
        );
      })} */}

      <p>{state.TITLE}</p>
    </>
  );
};

export default Posts;
