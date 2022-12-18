import React from "react";
import { UserAuth } from "../../Context/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await logOut();
    navigate("/");
  };

  const accNav = () => {
    navigate("/account");
  };

  const favNav = () => {
    navigate("/fav");
  };
  return (
    <>
      {user ? (
        <>
          <div className="bg-dark text-white p-2 d-flex justify-content-between align-items-center">
            <h4> Welcome {user.displayName}</h4>
            <Dropdown>
              <Dropdown.Toggle
                className="rounded"
                variant="dark"
                id="dropdown-basic"
              >
                <img
                  style={{ height: "40px", width: "40px" }}
                  className="rounded"
                  src={user.photoURL}
                  alt=""
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={accNav}>Account</Dropdown.Item>
                <Dropdown.Item onClick={favNav}>Your Comics</Dropdown.Item>
                <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      ) : (
        <div className="bg-dark text-white text-center p-2">COMC APP</div>
      )}
    </>
  );
};

export default Header;
