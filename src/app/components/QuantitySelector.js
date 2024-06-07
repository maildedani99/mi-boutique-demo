"use client";
import { useContext, useState } from "react";
import { AppContext } from "../lib/AppContext";

export default function QuantitySelector({ item }) {
  const { addQuantity, removeQuantity } = useContext(AppContext);

  const [quantity, setQuantity] = useState(item.quantity ? item.quantity : 1);

  const handleChange = (e) => {
    let value = parseInt(e.target.value, 10);

    // Ensure value is within bounds
    if (isNaN(value)) {
      value = 1;
    } else if (value < 1) {
      value = 1;
    } else if (value > 99) {
      value = 99;
    }

    setQuantity(value);

    // Update the context based on the new value
    if (value > item.quantity) {
      addQuantity(item, value - item.quantity);
    } else if (value < item.quantity) {
      removeQuantity(item, item.quantity - value);
    }
  };

  return (
    <div className="flex w-auto mx-auto text-slate-500">
      <input
        type="number"
        className="border p-2 text-center w-full"
        value={quantity}
        min="1"
        max="99"
        onChange={handleChange}
      />
    </div>
  );
}
