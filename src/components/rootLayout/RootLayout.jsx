import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ui/ScrollToTop ";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Advocacy from "../Advocacy";
import Organizetion from "../Organizetion";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <WhatWeDo></WhatWeDo>
      <Advocacy></Advocacy>
      <Organizetion></Organizetion>
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;
