import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer">
      <p>Hello we are Team 1</p>
    </footer>
  );
}

export default Footer;