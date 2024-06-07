import CarouselWrapper from "./CarouselWrapper";
import ButtonAddToCart from "./ButtonAddToCart";
import CloseModalIcon from "./CloseModalIcon";

export default function ProductViewCard({ product }) {
  if (!product || typeof product !== 'object') {
    return null;
  }

  // Function to convert newline characters to <br/> tags
  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="flex flex-1 relative md:container mx-auto text-[#636364]">
      <CloseModalIcon />
      <div className="flex flex-col lg:flex-row flex-1 justify-evenly mt-20">
        <div className="flex my-auto w-full justify-center lg:w-4/12">
          <CarouselWrapper product={product} />
        </div>
        <div className="text-2xl flex flex-col my-auto w-full lg:w-2/6">
          <div className="flex flex-col text-justify w-6/6">
            <span className="text-3xl font-medium">{product.name}</span>
            {product.reduced_price !== 0 ? (
              <div className="flex flex-row text-xl ml-1">
                <span className="mt-2 line-through mr-1">
                  {product.price.toFixed(2).replace('.', ',')} €{" "}
                </span>
                <span className="mt-2 text-red-600 ml-1">
                  {product.reduced_price.toFixed(2).replace('.', ',')} €
                </span>
              </div>
            ) : (
              <span className="mt-2 text-xl">
                {product.price.toFixed(2).replace('.', ',')} €
              </span>
            )}
            <span className="font-body text-base tracking-wider font-light mt-4">
              {formatDescription(product.description)}
            </span>
          </div>
          <div className="flex w-full">
            <ButtonAddToCart item={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
