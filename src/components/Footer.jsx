import React from "react";

const name = "David Gilkeson";
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Created by {name}</p>
      <p>Copyright © {year}</p>
    </footer>
  );
}

export default Footer;
