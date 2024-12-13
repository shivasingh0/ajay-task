import React, { useState } from "react";
import { baseUrl } from "../lib/helper";
import { Link } from "react-router-dom";
import CustomButton from "./uiComponent/CustomButton";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <>
      <nav className=" bg-[#232536] fixed top-0 right-0 z-50 w-screen h-20 lg:flex items-center justify-between px-10">
        <div>
          <img
            src={`${baseUrl()}/assets/client-first-images/Logo.svg`}
            alt=""
          />
        </div>
        <div className="flex lg:static absolute items-center gap-10">
          <ul className="flex lg:static absolute gap-10 ">
            <li>
              <Link to="/" className="text-white font-bold text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white font-bold text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white font-bold text-lg">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white font-bold text-lg">
                Contact us
              </Link>
            </li>
          </ul>
         <CustomButton className={'bg-white lg:flex hidden'} btnName={"subscribe"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
