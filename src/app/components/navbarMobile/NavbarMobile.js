"use client"
import React, { useState } from "react";
import { HeaderWrapper } from "./styles";
import NavMenu from "./NavMenu";
import MenuButton from "./MenuButton";
import NavSubMenu from "./NavSubMenu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "../CartIcon";

export default function NavbarMobile  ({ categories })  {

  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  const switchMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const onSubMenuOpen = (e) => {
    setSubCategories(
      categories.find((item) => item.id == e.target.id).subcategories
    );
    setSubMenuOpen(true);
  };
 

  return (
    <div>
      <HeaderWrapper className="flex flex-1 w-full my-auto px-8 border-b fixed bg-white">
        <div>
          <CartIcon />
        </div>
        <div className="flex flex-1 p-6 	my-auto ">
        <Link
          href='/products/novelties'
          className="	my-auto mx-auto">
          <Image className="mx-auto my-auto" src='/logogrisprueba.png' alt="Usuriaga" width={200} height={150} />
        </Link>
        </div>
        <NavMenu
          open={menuOpen}
          categories={categories}
          subMenuOpen={subMenuOpen}
          setSubMenuOpen={setSubMenuOpen}
          onSubMenuOpen={onSubMenuOpen}
          switchMenuOpen={switchMenuOpen}
        />
        <div className=" my-auto ">
          <MenuButton
            className="ml-2  my-auto "
            open={menuOpen}
            subMenuOpen={subMenuOpen}
            setSubMenuOpen={setSubMenuOpen}
            switchMenuOpen={switchMenuOpen}
          />
        </div>
        <NavSubMenu
          subCategories={subCategories}
          open={onSubMenuOpen}
          setSubMenuOpen={setSubMenuOpen}
          subMenuOpen={subMenuOpen}
          handleClick={switchMenuOpen}
          switchMenuOpen={switchMenuOpen}
        />
      </HeaderWrapper>
    </div>
  );
};


