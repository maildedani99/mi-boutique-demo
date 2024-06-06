import ProductsView from "../../../components/ProductsView";
import { getNovelties } from "../../../lib/data";


export default async function Novelties() {

  const products = await getNovelties()

  const plainProducts = JSON.parse(JSON.stringify(products));

  console.log(plainProducts);


  return (
    plainProducts && plainProducts.length > 0 ? (

      <ProductsView products={plainProducts} title="Novedades" />
    )
    :
    (
      <div className="flex flex-1 ">
          <div className="flex mx-auto min-h-[60vh]">
            <h1 className="text-4xl my-auto text-primary">
              No se han encontrado productos en esta categoría.
            </h1>
          </div>
        </div>
    )
    
  )


}