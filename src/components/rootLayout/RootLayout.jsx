import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ScrollToTop from "../ui/ScrollToTop ";

const RootLayout = () => {
  return (
    <>
      <div className="scroll-smooth">
        <NavBar />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default RootLayout;
