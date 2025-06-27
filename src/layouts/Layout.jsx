import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const footerRef = useRef(null);
  return (
    <div className="h-screen bg-gray-950">
      <Header />
      <main>
        <Outlet context={{footerRef}}/>
      </main>
      <Footer ref={footerRef}/>
    </div>
  );
};

export default Layout;
