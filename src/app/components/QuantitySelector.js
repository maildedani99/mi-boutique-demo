"use client"
import { FiMinus, FiPlus } from "react-icons/fi";
import { AppContext } from "../lib/AppContext";
import { useContext, useState } from "react";

export default function QuantitySelector({ item }) {

  const { addQuantity, removeQuantity } = useContext(AppContext)

  const [quantity, setQuantity] = useState(item.quantity ? item.quantity : 1)

  const handlePlus = (item) => {
    setQuantity(quantity + 1);
    addQuantity(item)
  };

  const handleMinus = (item) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      removeQuantity(item)
    }
  };


  return (
    <div className="mx-auto text-slate-500">
      <div className="flex flex-col-reverse	 sm:flex-row sm:border p-2  sm:px-3 sm:py-2 my-auto">
        <FiMinus
          size={15}
          color="#636364"
          className="mt-1.5 cursor-pointer"
          onClick={() => handleMinus(item)}
        />
        <span className="sm:mx-6 select-none text-base mx-auto">{quantity}</span>
        <FiPlus
          size={15}
          color="#636364"
          className="mt-1.5 cursor-pointer"
          onClick={() => handlePlus(item)}
        />
      </div>
      <div></div>
    </div>
  );
};


