import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../Images/logo.png"
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return <ReactNavbar 
  logoWidth="150px"
  logo={logo}
  navColor1="white" 
  navColor2="rgba(196, 21, 30, 0.8)"
  burgerColor="HSL(250,100%,75%)"
  burgerColorHover="rgba(196, 21, 30, 0.6)"
  nav2justifyContent="space-around"
  nav3justifyContent="space-around"
  link1Text="Home"
  link2Text="About"
  link3Text="Project"
  link4Text="Contact"
  link1Url="/"
  link2Url="/about"
  link3Url="/projects"
  link4Url="/contact"
  link1ColorHover="white"
  link1Color="rgba(64, 230, 64, 0.637)"
  link1Size="1.5rem"
  link1Padding="3vmax "
  profileIcon={true}
  ProfileIconElement={FaUserAlt}
  profileIconColor="rgba(64, 230, 64, 0.637)"
  profileIconColorHover="white"
  
  />;
};

export default Header;
