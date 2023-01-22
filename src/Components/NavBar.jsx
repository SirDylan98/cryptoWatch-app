import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="rounded-div flex items-center z-20 justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">CryptoBase</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="hidden md:block">
        <Link className="p-4 hover:text-accent" to="/signin">
          SignIn
        </Link>
        <Link
          className=" bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          to="/signin"
        >
          SignUp
        </Link>
      </div>
      {/* Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-center w-full h-[90%] bg-primary ease-in duration-500 z-10"
            : "md:hidden fixed left-[-100%] top-20 flex flex-col items-center justify-center w-full h-[90%] bg-primary ease-in duration-500 z-10"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b py-6">
            <Link to="/">Account</Link>
          </li>
          <li className="border-b py-6">
            <ThemeToggle />
          </li>
        </ul>
        <div className=" flex flex-col w-full p-4 ">
          <Link to="/signin">
            <button className="w-full my-2 p-3 bg-primary text-primary rounded-2xl border-2 border-secondary">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
