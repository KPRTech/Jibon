import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
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
