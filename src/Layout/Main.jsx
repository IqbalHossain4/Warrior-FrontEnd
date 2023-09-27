import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar/Navbar";
import Footer from "../Pages/Share/Footer/Footer";
import PreLoader from "../components/PreLoader/PreLoader";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  <style>body{isLoading}</style>;
  return (
    <div>
      <div>
        {isLoading ? (
          <PreLoader />
        ) : (
          <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
