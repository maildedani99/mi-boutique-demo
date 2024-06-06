import ProductsView from "../../../components/ProductsView";
import { getProductsBySubcategory, getSubcategory } from "../../../lib/data"


export default async function Products({ params }) {

  const products = await getProductsBySubcategory(params.id)
  const subcategory = await getSubcategory(params.id)
  const title = subcategory ? subcategory[0].name : "ERROR"

  return (

    <ProductsView products={products} title={title} />
  )
}