"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../lib/AppContext";
import { HiLockClosed } from "react-icons/hi2";
import useProducts from "../lib/utils";
import { useRouter } from "next/navigation";

export default function ButtonAddToCart({ item }) {
  const {
    addItemToCart,
    sizeSelectedOption,
    setSizeSelectedOption,
    colorSelectedOption,
    setColorSelectedOption,
    colors,
    sizes,
  } = useContext(AppContext);

  const router = useRouter();

  const { getColorById, getSizeById } = useProducts();

  const stock = item.stock;

  const itemWithDetails = {
    ...item,
    colors: stock.reduce((result, stockItem) => {
      const color = getColorById(stockItem.color_id);
      const size = getSizeById(stockItem.size_id);
      const existingColor = result.find(
        (item) => item?.color?.id === color?.id
      );
      if (existingColor) {
        existingColor.sizes.push(size);
        existingColor.quantity += stockItem.quantity;
      } else {
        result.push({
          color,
          sizes: [size],
          quantity: stockItem.quantity,
        });
      }

      return result;
    }, []),
  };

  const handleAddItemToCard = () => {
    if (colorSelectedOption && sizeSelectedOption) {
      addItemToCart(item, sizeSelectedOption, colorSelectedOption);
      router.push(`/alert?messageId=alert_1`);
    } else {
      router.push(`/alert?messageId=alert_4`);
    }
  };

  useEffect(() => {
    if (itemWithDetails) {
      setColorSelectedOption(itemWithDetails.colors[0].color);
      setSizeSelectedOption(itemWithDetails.colors[0].sizes[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const selectedColor = itemWithDetails?.colors?.find(
      (item) => item.color?.id === colorSelectedOption?.id
    );
    if (selectedColor) setSizeSelectedOption(selectedColor.sizes[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorSelectedOption]);

  return (
    <div className="flex flex-col w-full mt-8 text-lg font-medium">
      Colores
      <div className="flex mt-2 mb-4">
        {itemWithDetails &&
          itemWithDetails.colors?.map((e, index) => (
            <div
              key={index}
              onClick={() => setColorSelectedOption(e.color)}
              className={`tooltip w-5 h-5 border-2 border-[#929292] rounded-full inline-block mr-2 cursor-pointer ${
                colorSelectedOption && e.color?.id === colorSelectedOption?.id
                  ? "border-black"
                  : "border-[#929292]"
              }`}
              style={{ background: e?.color?.color }}
            >
              <span className="tooltiptext">{e.color.name}</span>
            </div>
          ))}
      </div>
      Tallas
      {colorSelectedOption &&
        itemWithDetails.colors?.map((e) => {
          if (colorSelectedOption?.id === e.color?.id) {
            return (
              <div key={e.color.id} className="flex w-full flex-row">
                {e.sizes?.map((size, index) => (
                  <div
                    key={index}
                    onClick={() => setSizeSelectedOption(size)}
                    className={`flex border w-8 h-8 mr-3 mt-2 font-normal cursor-pointer ${
                      sizeSelectedOption && sizeSelectedOption.id === size.id
                        ? "bg-primary"
                        : ""
                    }`}
                  >
                    <span className="mx-auto my-auto text-base">
                      {size?.name}
                    </span>
                  </div>
                ))}
              </div>
            );
          } else {
            return null;
          }
        })}
      <button
        className="flex mt-10 xl:w-4/6 lg:w-5/6 md:w-3/6 sm:w-4/6 w-5/6 mx-auto p-4 font-semibold bg-primary text-xl text-white cursor-pointer text-center mb-8 focus:outline-none"
        readOnly
        onClick={handleAddItemToCard}
      >
        <span className="mx-auto">Añadir al carrito</span>
      </button>
      <div className="flex">
        <HiLockClosed size={20} color="#dac895" className="my-auto" />{" "}
        <span className="text-base text-primary my-auto ml-1 mt-1">
          Pago seguro
        </span>
      </div>
    </div>
  );
}
