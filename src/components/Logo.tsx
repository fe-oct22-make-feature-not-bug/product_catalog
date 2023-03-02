import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo_footer.svg";

export const Logo: React.FC = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" className="logo" />
    </Link>
  );
};
