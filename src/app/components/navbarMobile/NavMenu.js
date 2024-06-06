import React from "react";
import { NavbarWrapper } from "./styles";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function NavMenu({ open, categories, onSubMenuOpen, switchMenuOpen}) {

  const onClickCategories = (id) => {
    switchMenuOpen();
  };


  return (
    <NavbarWrapper open={open}>
      <div className="flex flex-1 w-full  flex-col text-[#636364]   bg-white h-screen	">
        <div className="text-2xl  mt-16	 mx-2 capitalize cursor-pointer">
          <Link href="/products/novelties" id="novelties" onClick={(e) => onClickCategories(e.target.id)}>
            <span className="text-[#636364]">
              Novedades
            </span>
          </Link>
        </div>
        {
          categories &&
        categories?.map(
          (category) =>
            category.subcategories.length > 0 && (
              <div
                key={category.id}
                className="flex  w-full  text-2xl  mt-10	  capitalize mx-6  cursor-pointer "
              >
                <span className="min-w-[150px]" id={category.id} onClick={(e) => onSubMenuOpen(e)}>
                  {category.name}
                </span>
                <IoIosArrowForward className="my-auto ml-5"/>
              </div>
            )
        )}
        <div className="text-2xl  mt-10	  mx-2 capitalize cursor-pointer">
          <Link
            href="/products/discounts"
            id="discount"
            onClick={(e) => onClickCategories(e.target.id)}
          >
            <span className="text-[#636364]">
              Rebajas

            </span>
          </Link>
        </div>{" "}
        <div className="text-2xl  mt-10	  mx-2 capitalize cursor-pointer">
          <Link
            href="/products/outlet"
            id="outlet" onClick={(e) => onClickCategories(e.target.id)}>
            <span className="text-[#636364]">
              Outlet

            </span>
          </Link>
        </div>
      </div>
    </NavbarWrapper>
  );
};

