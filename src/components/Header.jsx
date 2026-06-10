import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-orange-700 h-16 flex items-center justify-between px-8">
      <div>
        {/* <img
          src="/image.png"
          alt="Logo"
          className="h-12"
        /> */}
        <FaStore className=" text-2xl text-white" />
      </div>

      <div className="flex gap-6 text-white font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
