import ProductsView from "../../../components/ProductsView";
import { getProductsBySubcategory, getSubcategory } from "../../../lib/data"


export default async function Products({ params }) {

  const products = await getProductsBySubcategory(params.id)
  const resSubcategory = await getSubcategory(params.id)
  const subcategory = resSubcategory[0]
  console.log(subcategory)
  //const title = subcategory ? subcategory[0].name : "ERROR"
  return (

    <ProductsView products={products} title={subcategory ? subcategory?.name : "ERROR"} />
  )
}