import ProductsView from "../../../components/ProductsView";
import Searcher from "../../../components/Searcher";
import { getProductsStock } from "../../../lib/data";

export default async function Search () {

    const products = await getProductsStock();
    

    return (
        <Searcher products={products} />
    )
}