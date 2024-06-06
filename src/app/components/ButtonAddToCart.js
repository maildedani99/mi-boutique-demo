"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../lib/AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiLockClosed } from "react-icons/hi2";
import useProducts from "../lib/utils";

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

  const { getColorById, getSizeById } = useProducts()


  const stock = item.stock;

  const itemWithDetails = {
    ...item,
    colors: stock.reduce((result, stockItem) => {
      const color = getColorById(stockItem.color_id);
      const size = getSizeById(stockItem.size_id);
      const existingColor = result.find((item) => item?.color?.id === color?.id);
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


  const showToastMessage = (type) => {
    if ( type === "success") {
      toast.success("Este producto se ha añadido al carrito", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    if (type === "error") {
      toast.error("Debes seleccionar color y talla", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  const handleAddItemToCard = () => {
    if (colorSelectedOption && sizeSelectedOption) {
      addItemToCart(item, sizeSelectedOption, colorSelectedOption);
      showToastMessage("success");
    } else {
      showToastMessage("error");
    }
  };

  useEffect(() => {
    itemWithDetails && setColorSelectedOption(itemWithDetails.colors[0].color)
    itemWithDetails && setSizeSelectedOption(itemWithDetails.colors[0].sizes[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    const selectedColor = itemWithDetails?.colors?.find((item) => { return item.color?.id === colorSelectedOption?.id })
    selectedColor && setSizeSelectedOption(selectedColor.sizes[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorSelectedOption])



  return (
    <div className="flex flex-1 flex-col w-full mt-8 text-lg font-medium ">
      Colores
      <div className="flex mt-2 mb-4">
        {itemWithDetails && itemWithDetails.colors?.map((e, index) => {
          return (
            <div
              key={index}
              onClick={() => setColorSelectedOption(e.color)}
              className={`w-5 h-5 border-2 border-[#929292] rounded-full inline-block mr-2 cursor-pointer ${colorSelectedOption && e.color?.id === colorSelectedOption?.id ? "border-black" : "border-[#929292]"
                }`}
              style={{ background: e?.color?.color }}
            ></div>
          );
        })}
      </div>
      Tallas
      {colorSelectedOption &&
        itemWithDetails.colors?.map((e) => {
          if (colorSelectedOption?.id === e.color?.id) {
            return (
              <div key={e.color.id} className="flex w-full flex-row">
                {e.sizes?.map((size, index) => (
                  <div key={index} onClick={() => setSizeSelectedOption(size)} className={`flex border w-8 h-8 mr-3  mt-2 font-normal cursor-pointer ${sizeSelectedOption && sizeSelectedOption.id === size.id ? "bg-primary text-white" : ""} `}   >
                    <span className="mx-auto my-auto text-base">{size?.name}</span>
                  </div>
                ))}
              </div>
            );
          } else {
            return null;
          }
        })

      }

      <input
        className="flex mt-10 flex-1 p-4 font-normal text-xl text-white uppercase cursor-pointer text-center mb-8 focus:outline-none bg-primary"
        readOnly
        onClick={handleAddItemToCard}
      defaultValue="Añadir al carrito"
      />
      <div className="flex">
        <HiLockClosed size={20}  className="my-auto text-primary" />{" "}
        <span className="text-base text-primary my-auto ml-1 mt-1">
          Pago seguro
        </span>
      </div>
      <ToastContainer />
    </div>
  );
}
