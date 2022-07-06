import React from "react";
import { Link, Outlet } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
