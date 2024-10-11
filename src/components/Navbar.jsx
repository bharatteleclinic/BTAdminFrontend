import React from "react";
import logo from "../assets/BTlogo.jpg";
import { Link, NavLink } from "react-router-dom";
export const width = "22vw";
const Navbar = () => {
  return (
    <div style={{ width, height: "10vh", display: "flex",flexDirection:"column", justifyContent: "center", padding: "1rem", background: "red", position: "fixed" }} >
      <img className="logo" style={{ width: "12rem", height: "5rem" }} src={logo} alt="" />
      {/* <div>
        <NavLink to='/'>lnjnj</NavLink>
      </div> */}
    </div>
  );
};

export default Navbar;
