import React from "react";
import { UserAuth } from "../../Context/AuthContext";
const Header = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = () => {
    logOut();
  };
  return (
    <>
      <div className="bg-dark text-white text-end p-2">
        {user?.displayName ? (
          <h5 onClick={handleSignOut}>Sign Out</h5>
        ) : (
          <h5>Sign In</h5>
        )}
      </div>
    </>
  );
};

export default Header;
