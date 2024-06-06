"use client";
import Image from "next/image";
import QuantitySelector from "./QuantitySelector";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useContext } from "react";
import { AppContext } from "../lib/AppContext";
import Link from "next/link";

export default function CartItems() {
  const { cartItems, removeItemFromCart, handlePlus } = useContext(AppContext);


  return (
    <div className="flex flex-col w-full lg:mx-10   ">
      {cartItems && cartItems.length !== 0 ? (
        cartItems?.map((item, index) => (
          <div key={index} className="flex  border-t border-primary  h-auto">
            <div className="hidden sm:flex w-1/12 lg:w-2/12 my-auto ">
              <Image src={item.images[0].url} alt="imagen" width={80} height={100} className="py-2" />
            </div>
            <div className="flex my-auto flex-1 justify-evenly">
              <div className="flex flex-col ml-4 text-base lg:text-lg w-2/6 font-medium my-auto">
                <span className="">{item.name}</span>
                <span className="mt-2">{item.price.toString().replace('.', ',')} €</span>
              </div>
              <div className="flex px-3 flex-col ml-4 text-base lg:text-lg  font-medium my-auto text-center">
                <div className="w-5 h-5 border-2 border-[#929292] rounded-full my-auto" style={{ background: item.color.color }}></div>
              </div>
              <div className="flex px-3 flex-col ml-4 text-base lg:text-lg  font-medium my-auto text-center">
                <div className="flex  border w-8 h-8  font-normal cursor-pointer "   >
                  <span className="mx-auto my-auto text-base">{item?.size.name}</span>
                </div>
              </div>
              <div className="flex mx-auto flex-1 my-auto">
                <QuantitySelector item={item} handlePlus={handlePlus} />
              </div>
              <span className="font-bold text-base lg:text-lg mr-4 my-auto">{item.price * item.quantity} €</span>
              <div
                className="flex   mx-auto cursor-pointer justify-end my-auto"
                onClick={() => removeItemFromCart(item)}
              >
                <FaRegTrashAlt />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-1 flex-col mx-auto ">
          <h1 className="text-primary text-4xl mx-auto mt-32 text-center">Tu cesta está vacía</h1>
          <Link href="/">
            <LiaCartPlusSolid size={100} color="#dac895" strokeWidth={0.1} className="mx-auto mt-8 " />
          </Link>
        </div>
      )}
    </div>

  );
}
