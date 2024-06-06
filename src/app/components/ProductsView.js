import ProductCard from "./ProductCard";

export default function ProductsView({ products , title }) {
  
  console.log('Products:', products);

  return (
    <>
      <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light text-[#515151] text-center">
        <span>{title}</span>
      </div>
      {products && products.length > 0 &&
        <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 text-5xl justify-center w-full tracking-wider  font-light text-[#515151] text-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      }
    </>
  );
}
