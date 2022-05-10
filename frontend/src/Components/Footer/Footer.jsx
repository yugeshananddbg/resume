import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Yugesh Anand. I am a Full-Stack Developer
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/yugeshananddbg/" target="black">
          <BsGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCRABuCnfdZzYBJnmAzxmPZg"
          target="black"
        >
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/yugeshanand/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yugeshanand/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
