import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
