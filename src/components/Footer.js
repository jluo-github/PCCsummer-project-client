import React from "react";
import { Github } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer
      variant="dark"
      className=" myFooter navbar  py-3 fixed-bottom shadow-lg justify-content-center container-fluid ">
      {" "}
      Copyright &copy; 2022_summer_team4{" "}
      <a href="https://github.com/cis197-pcc/2022_summer_team4" target="_blank">
        <Github className="myIcon" width="100" height="30" />
      </a>
      {/* <div className="form-check form-switch d-flex ms-auto">
      <input
        onClick={onClick}
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label
        className=" myLabel form-check-label"
        htmlFor="flexSwitchCheckDefault">
        Dark Mode
      </label>
    </div> */}
    </footer>
  );
};

export default Footer;
