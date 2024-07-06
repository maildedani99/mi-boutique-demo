import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
//import { NavLink, useNavigate } from "react-router-dom";
import Image from "next/image";
import { getCategories } from "../lib/data";
import NavbarLink from "./NavbarLinks";
import Link from "next/link";
import CartIcon from "./CartIcon";
import NavbarMobile from "./navbarMobile/NavbarMobile";
import SearchBar from "./SearchBar";
import SearchButton from "./Searchbutton";
import NavbarLinksDesktop from "./NavbarLinksDesktop";


export default async function Navbar() {
  const categories = await getCategories();

  const categoriesPlain = JSON.parse(JSON.stringify(categories))

  return (
    <>
      <div className="hidden lg:flex w-full fixed flex-col bg-white top-0 z-10	">
        <div
          className="flex  flex-1 border-b bg-primary 	"
        >
          <div className="flex flex-1 w-3/5 justify-center  p-1 	 tracking-widest ">
            <span className="text-white">
              ENVÍOS GRATIS para compras superiores a 60€
            </span>
          </div>
        </div>
        <div className="flex flex-row flex-1 border-b">
          <Link href="/products/novelties" className=" p-6 w-2/12	my-auto ">
            <Image
              className="mx-auto"
              src="/logo_black.svg"
              alt="logo"
              width={100}
              height={100}  
            />
          </Link>

          <NavbarLinksDesktop categories={categoriesPlain ? categoriesPlain : []} />
          <div className="flex  	py-10 px-6 justify-evenly w-2/12 max-w-sm opacity-70">
          <SearchButton />
            <CartIcon />
          </div>
       
        </div>
     
      </div>
      <div className="flex lg:hidden w-full fixed flex-col bg-white top-0 z-10	">
        <NavbarMobile categories={categoriesPlain ? categoriesPlain : []} />
      </div>
    </>
  );
}
