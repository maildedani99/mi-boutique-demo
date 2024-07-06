"use client";
import Image from "next/image";
import QuantitySelector from "./QuantitySelector";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useContext } from "react";
import { AppContext } from "../lib/AppContext";
import Link from "next/link";
import ClientImage from "./ClientImage";

export default function CartItems() {
  const { cartItems, removeItemFromCart, handlePlus } = useContext(AppContext);

  const calculatePrice = (item) => item.reduced_price ? item.reduced_price : item.price;
  
  return (
    <div className="flex flex-col w-full lg:mx-10">
      {cartItems && cartItems.length !== 0 ? (
        cartItems.map((item, index) => {
          const price = calculatePrice(item);
          const totalPrice = price * item.quantity;
          return (
            <div key={index} className="flex flex-col sm:flex-row border-t border-[#DAC895] py-4">
              <Link href={`/product/${item.id}`} className="flex w-full sm:w-1/12 lg:w-2/12 my-auto justify-center sm:justify-start mb-4 sm:mb-0">
                <ClientImage
                  src={item.images[0].url}
                  alt="imagen"
                  width={80}
                  height={100}
                  className="py-2"
                />
              </Link>
              <div className="flex flex-col sm:flex-row flex-1 justify-evenly">
                <div className="flex flex-col text-center sm:text-left ml-4 text-base lg:text-lg w-full sm:w-2/6 font-medium my-auto">
                  <span>{item.name}</span>
                  <span className="mt-2">{price.toFixed(2).replace('.', ',')} €</span>

                </div>
                <div className="flex flex-col text-center px-3 font-medium my-auto">
                  <div
                    className="w-5 h-5 border-2 border-[#929292] rounded-full mx-auto sm:mx-0 my-2 sm:my-auto"
                    style={{ background: item.color.color }}
                  ></div>
                </div>
                <div className="flex flex-col text-center px-3 font-medium my-auto">
                  <div className="flex border w-8 h-8 font-normal cursor-pointer mx-auto sm:mx-0 my-2 sm:my-auto">
                    <span className="mx-auto my-auto text-base">{item?.size.name}</span>
                  </div>
                </div>
                <div className="flex mx-auto sm:mx-0 flex-col sm:flex-row flex-1 my-auto justify-center sm:justify-start">
                  <QuantitySelector item={item} handlePlus={handlePlus} />
                </div>
                <span className="flex flex-col text-center px-3 text-xl my-auto font-semibold">
                  {totalPrice.toFixed(2).toString().replace('.', ',')} €
                </span>
                <div
                  className="flex justify-center sm:justify-end cursor-pointer my-auto"
                  onClick={() => removeItemFromCart(item)}
                >
                  <FaRegTrashAlt />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-1 flex-col mx-auto">
          <h1 className="text-primary text-4xl mx-auto mt-32 text-center">Tu cesta está vacía</h1>
          <Link href="/">
            <LiaCartPlusSolid size={100} color="#dac895" strokeWidth={0.1} className="mx-auto mt-8" />
          </Link>
        </div>
      )}
    </div>
  );
}
