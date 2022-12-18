import React from "react";
import { UserAuth } from "../../Context/AuthContext";
const Header = () => {
  const { user, logOut } = UserAuth();
  return (
    <>
      <div>
        {user?.displayName ? <button>Log Out</button> : <h3>Sign In</h3>}
      </div>
    </>
  );
};

export default Header;
