import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
import ScrollToTop from "../ui/ScrollToTop ";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;
