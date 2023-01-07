import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../Footer";
import ScrollToTop from "../ui/ScrollToTop ";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Advocacy from "../Advocacy";
import Organizetion from "../Organizetion";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <WhatWeDo></WhatWeDo>
      <Advocacy></Advocacy>
      <Organizetion></Organizetion>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;
