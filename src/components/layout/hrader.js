import React from "react";
import Logo from "../../assets/logo_frame.png"

function Header() {

  return (
    <div className="header">
      <img src={Logo} alt="BWF Logo" height="150"/>
    </div>
  );
}

export default Header;
