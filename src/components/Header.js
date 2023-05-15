import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

//icons
import { BsBag } from "react-icons/bs";

//cart context
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

import Logo from "../img/logo.svg";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const { setIsOpen, isOpen } = useContext(SidebarContext);

  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <div
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="flex container mx-auto items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
