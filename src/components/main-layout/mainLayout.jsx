import React from "react";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {" "}
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;
