"use client"

import { useContext } from "react";
import { AppContext } from "./AppContext";


export default function useProducts () {

    const {colors, sizes} = useContext(AppContext)
      
    
    const getColorById = (colorId) => {
        return colors.find((color) => color.id === colorId);
    }
    
    const getSizeById = (sizeId) => {
        return sizes.find((size) => size.id === sizeId);
    }


    return { getColorById, getSizeById}
}