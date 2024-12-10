import React from "react";
import { baseUrl } from "../lib/helper";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#232536] h-20 flex items-center justify-between px-10">
        <div>
          <img
            src={`${baseUrl()}/assets/client-first-images/Logo.svg`}
            alt=""
          />
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex gap-10">
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
          <button className="bg-white text-[#232536] font-bold text-lg px-5 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
