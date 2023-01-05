import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos < 70) ||
        currentScrollPos < 200
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    backgroundColor: "grey",
    textAlign: "center",
    transition: "top 0.6s",
  };

  return (
    <div>
      <div style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}>
        Some Company Inc.
      </div>
    </div>
  );
};

export default Navbar;
