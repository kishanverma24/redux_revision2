import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          fontSize: "20px",
          fontWeight: "bolder",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
          Home
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to={"/cart"}>
          Cart
        </Link>
        <span>Items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
