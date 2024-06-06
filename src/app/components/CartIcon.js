"use client"
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "../lib/AppContext";
import { useContext } from "react";

export default  function CartIcon() {

    const { cartItems, removeItemFromCart, handlePlus } = useContext(AppContext);
  return (
    <Link href="/cartView" className="cursor-pointer relative">
      <div className="relative">
        <FiShoppingCart className="mx-auto my-auto" size={25} color="#636364" />
        {cartItems.length > 0 && (
          <div className="bg-red-500 rounded-full text-white text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
            {cartItems.length}
          </div>
        )}
      </div>
    </Link>
  );
}
