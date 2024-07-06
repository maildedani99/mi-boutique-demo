import ProductCard from "./ProductCard";

export default function ProductsView({ products, title }) {

  return (
    <>
      <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light text-[#515151] text-center">
        <span>{title}</span>
      </div>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-5xl justify-center w-full tracking-wider font-light text-[#515151] text-center">
          {products.slice().reverse().map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-1">
          <div className="flex mx-auto min-h-[60vh]">
            <h1 className="text-4xl my-auto text-primary">
              No se han encontrado productos en esta categoría.
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
