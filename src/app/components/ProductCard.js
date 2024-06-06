import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {


  return (
    <Link
      href={`/productView/${product.id}`}
      className="flex flex-col  p-4 justify-start tracking-wider	 text-[#515151]	cursor-pointer mt-8 "
    >
      <div className="relative">
        {product.outlet == true &&
          <span className="absolute bg-primary text-sm top-2 right-8 font-normal text-white px-2 uppercase">Outlet</span>
        }
      <Image src={product.images[0].url && product.images[0].url} width={300} height={450} alt="foto" className="mx-auto" />
      </div>
      <span className=" text-base	 mx-auto mt-2">{product.name}</span>
      {product.discount == true && product.reduced_price !== 0 ? (
        <div className="flex flex-row flex-1 w-full mx-auto ml-1 justify-center  ">
          <span className=" text-base	mt-2 line-through  mr-1">
          {product.price.toString().replace('.', ',')}€{" "}
          </span>
          <span className=" text-base	  mt-2 text-red-600 ml-1">
            {product.reduced_price.toString().replace('.', ',')}€
          </span>
        </div>
      ) : (
        <span className=" text-base	 mx-auto mt-2 ">{product.price.toString().replace('.', ',')}€</span>
      )}

    </Link>
  )
}