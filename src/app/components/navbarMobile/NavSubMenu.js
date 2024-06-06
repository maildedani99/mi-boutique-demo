import React from "react";
import { NavbarWrapper } from "./styles";
import Link from "next/link";

export default function NavSubMenu({
  subCategories,
  subMenuOpen,
  setSubMenuOpen,
  switchMenuOpen
}) {

  const onClickCategories = (id) => {
    switchMenuOpen()
    setSubMenuOpen(false)
  };

  return (
    <NavbarWrapper open={subMenuOpen}>
      <div className="flex  flex-col capitalize mt-8  bg-white h-screen	w-screen	">
        {subCategories &&
          subCategories?.map((subCategory) => (
            <Link
              href={`/products/${subCategory.id}`}
              key={subCategory.id}
              id={subCategory.id}
              className="text-2xl mt-8 mx-2 capitalize cursor-pointer "
              onClick={(e) => onClickCategories(e.target.id)}
            >
              <span className="text-[#636364] ">
                {subCategory.name}
              </span>
            </Link>
          ))}
      </div>
    </NavbarWrapper>
  );
};


