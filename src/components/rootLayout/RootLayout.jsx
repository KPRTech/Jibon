import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from '../Footer';
import ScrollToTop from "../ui/ScrollToTop ";


const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      <ScrollToTop/>
    </>
  );
};

export default RootLayout;