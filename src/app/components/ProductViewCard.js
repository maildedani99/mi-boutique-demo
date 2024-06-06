import CarouselWrapper from "./CarouselWrapper";
import ButtonAddToCart from "./ButtonAddToCart";
import Modal from "./Modal";
import CloseModalIcon from "./CloseModalIcon";
import ProductCard from "./ProductCard";

export default function ProductViewCard({ product }) {

  return (
    <Modal>
      <div className="flex flex-1 relative  container mx-auto 	text-[#636364]">
        <CloseModalIcon />
        <div className="flex flex-col lg:flex-row flex-1 justify-evenly mt-20">
          <div className=" flex my-auto w-full justify-center	lg:w-4/12  ">
            <CarouselWrapper product={product}  />
          </div>
          <div className="text-2xl flex flex-col my-auto w-full	lg:w-2/6   ">
            <div className="flex flex-col  text-justify  	w-6/6 ">
              <span className="text-3xl font-medium ">{product.name}</span>
              <span className="text-lg font-medium mt-4">{product.price.toString().replace('.', ',')}€</span>
              <span className="   font-body text-base tracking-wider	font-light	  	mt-4">
                {product.description}
              </span>
            </div>
            <div className="flex w-full  ">
              <ButtonAddToCart item={product} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
