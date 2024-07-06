import ProductsView from "../../../components/ProductsView";
import { getDiscounts } from "../../../lib/data";


export default async function Discounts () {

    const products = await getDiscounts()

    return (
      <ProductsView products={products} title="Rebajas" />
    )
}