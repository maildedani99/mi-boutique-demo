import React from "react";
import { BsList, BsX, BsArrowLeft } from "react-icons/bs";
import { MenuButtonWrapper } from "./styles";

const MenuButton = ({ open, switchMenuOpen, subMenuOpen, setSubMenuOpen }) => {
  return !open ? (
    <MenuButtonWrapper onClick={switchMenuOpen}>
      <BsList size={40} />
    </MenuButtonWrapper>
  ) : (
    
        !subMenuOpen ? (
          <MenuButtonWrapper onClick={switchMenuOpen}>
          <BsX size={45} />
          </MenuButtonWrapper >
          )
          :
          <MenuButtonWrapper onClick={()=>setSubMenuOpen(false) }>
          <BsArrowLeft size={40} />
          </MenuButtonWrapper >
        
  );
};

MenuButton.propTypes = {};

export default MenuButton;
