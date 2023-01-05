import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [color, setColor] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos < 70) ||
        currentScrollPos < 200
    );

    setPrevScrollPos(currentScrollPos);

    if (window.scrollY > 70) {
      setColor(true);
      console.log("asdasd");
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    width: "100%",
    // backgroundColor: "grey",
    textAlign: "center",
    // transition: "top 0.6s",
  };

  return (
    <div>
      <div
        style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}
        className={`linear duration-500 ${
          !color ? "bg-transparent py-16" : "bg-[red] py-5"
        }`}
      >
        Some Company Inc.
      </div>
    </div>
  );
};

export default Navbar;
