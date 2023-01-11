import { useState, useEffect } from "react";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="lg:max-w-container mx-auto flex flex-col lg:flex-row px-3 xl:px-0 relative pb-20 lg:pb-0">
      <ul className="lg:h-[4.8vw] cursor-pointer list-none flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-4 lg:gap-6 xl:gap-[30px] linear duration-300 my-10 ml-2 lg:ml-0 lg:pb-0 md:my-9 lg:my-0">
        <NavItem href={"#"} linkName={"ABOUT US"} className={""}>
          <Dropdown>
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              linkName={"Our Story"}
              linkClass={"after:hidden"}
              href={"/about-us/ourstory"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              linkName={"Leadrship & Board"}
              linkClass={"after:hidden"}
              href={"/about-us/leadership"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              linkName={"financials"}
              linkClass={"after:hidden"}
              href={"/about-us/financials"}
            />
          </Dropdown>
        </NavItem>
        <NavItem href={"#"} linkName={"Our Work"} className={""}>
          <Dropdown>
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              linkName={"School Reform"}
              linkClass={"after:hidden"}
              href={"/our-work/school-reform"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              linkName={"Advocacy"}
              linkClass={"after:hidden"}
              href={"/our-work/advocacy"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              linkName={"Past Projects"}
              linkClass={"after:hidden"}
              href={"/our-work/past-projects"}
            />
          </Dropdown>
        </NavItem>
        <NavItem href={"#"} linkName={"Our Schools"} className={""}>
          <Dropdown>
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/akhatoonpakistan"}
              linkName={"Khatoon-e-Pakistan"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/fatimajinnah"}
              linkName={"SMB Fatima Jinnah"}
              linkClass={"after:hidden"}
            />
          </Dropdown>
        </NavItem>
        <NavItem href={"#"} linkName={"Impact"} className={""}>
          <Dropdown>
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/infrastructure"}
              linkName={"Infrastructure"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/governance"}
              linkName={"Governance"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/acrt-to-per-page"}
              linkName={"ACR to PER"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/impact/new-program"}
              linkName={"New Programs"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/impact/academics"}
              linkName={"Academics"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/impact/policy"}
              linkName={"Policy"}
              linkClass={"after:hidden"}
            />
          </Dropdown>
        </NavItem>
        <NavItem href={"#"} linkName={"Volunteer"} className={""}>
          <Dropdown>
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"volunteer-program"}
              linkName={"Volunteer Program"}
              linkClass={"after:hidden"}
            />
          </Dropdown>
        </NavItem>
        <NavItem href={"#"} linkName={"The Latest"} className={""}>
          <Dropdown>
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"news-events"}
              linkName={"News & Events"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"a-review-of-2021"}
              linkName={"A Review of 2021"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"a-review-of-2020"}
              linkName={"A Review of 2020"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"a-review-of-2019"}
              linkName={"A Review of 2019"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"our-covid-19-response"}
              linkName={"Our Covid Response"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"AisaPakistan"}
              linkName={"Asia Pakistan"}
              linkClass={"after:hidden"}
            />
          </Dropdown>
        </NavItem>
        <NavItem
          linkName={"Membership"}
          className={""}
          href={"/membership"}
        />
        <NavItem href={"career"} linkName={"Careers"} className={""} />
        <NavItem href={"#"} linkName={"Contact Us"} className={""}>
          <Dropdown>
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/contact/our-office"}
              linkName={"Our Office"}
              linkClass={"after:hidden"}
            />
            <NavItem
              className={
                "font-mont font-normal px-4 py-1 group-hover:py-3.5 hover:bg-[#26282d] hover:text-[#ff6400]"
              }
              href={"/contact/our-chapters"}
              linkName={"Our Chapters"}
              linkClass={"after:hidden"}
            />
          </Dropdown>
        </NavItem>
        <div className="flex items-center gap-1 text-[11px] font-normal">
          <Link to="/donate">
            <button className="uppercase text-white bg-[#FF6400] text-xs font-mont py-[10px] px-[17px] rounded hover:bg-orange-700 duration-300 flex items-center">
              Donate
            </button>
          </Link>
          <Link to="#">
            <button className="uppercase text-white bg-[#FF6400] text-xs font-mont py-[10px] px-[17px] rounded hover:bg-orange-700 duration-300 flex items-center">
              Fundraise
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
  return (
    <Navbar
      className={
        offset <= 60
          ? "top-0 z-50 fixed lg:bg-opacity-0 border-0 px-8 text-secondary lg:text-white pb-5 lg:py-5 shadow-lg lg:shadow-none "
          : "bg-white text-[#333] fixed top-0 bg-opacity-100 duration-500 z-50 px-8 pb-5 lg:py-0 shadow-lg lg:shadow-none "
      }
    >
      <div className="lg:container mx-auto flex items-center justify-between">
        {offset <= 100 ? (
          <Link to="/">
            <img
              className="w-[130px] mt-5 lg:mt-0 lg:w-[150px] lg:h-[75px] hidden lg:block"
              src="/assets/images/logo.svg"
              alt=""
            />
            <img
              className="w-[130px] mt-5 lg:mt-0 lg:w-[150px] lg:h-[75px] block lg:hidden"
              src="/assets/images/logo-b.svg"
              alt=""
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              className="w-[130px] mt-5 lg:mt-0 lg:w-[150px] lg:h-[75px]"
              src="/assets/images/logo-b.svg"
              alt=""
            />
          </Link>
        )}
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};

export default NavBar;
