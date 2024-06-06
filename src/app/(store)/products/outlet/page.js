import ProductsView from "../../../components/ProductsView";
import { getOutletProducts } from "../../../lib/data";


export default async function Outlet () {

    const products = await getOutletProducts()


    return (
      <>
      <ProductsView products={products} title="Outlet" />
    </>
    )
}