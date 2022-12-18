import React from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../Context/AuthContext";
import { async } from "@firebase/util";
const Auth = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Auth;
