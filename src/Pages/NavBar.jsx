import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar shadow-sm" style={{ backgroundColor: "#fffdd0" }}>
        <div className="navbar-start">
          {/* Dropdown Menu (Mobile) */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="font-bold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/product">
                  Product
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/galeri">
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo dan Judul */}
          <Link className="btn btn-ghost text-xl" to="/">
            <img
              src="/WhatsApp Image 2025-05-28 at 22.51.31.jpeg"
              alt="Coffee Icon"
              className="w-10 h-10 mr-2 rounded-full"
            />
            Bengkel Kopi
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-bold" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/product">
                Product
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/galeri">
                Galeri
              </Link>
            </li>
          </ul>
        </div>

        {/* Tombol Kanan */}
        <div className="navbar-end">
          <a className="btn bg-amber-800 text-white border-none hover:bg-amber-700">
            Button
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
