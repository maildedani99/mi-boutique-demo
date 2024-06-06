"use client"
import { useContext, useEffect, useState } from "react";
import ProductsView from "./ProductsView";
import { AppContext } from "../lib/AppContext";


export default function Searcher({ products }) {

    const [filteredProducts, setFilteredProducts] = useState([])

    const { searchTerm } = useContext(AppContext)

    const searchByName = () => {
        const searchTermLowerCase = searchTerm?.toLowerCase();

        return products?.filter(product => {
            const productNameLowerCase = product?.name.toLowerCase();
            return productNameLowerCase.includes(searchTermLowerCase);
        });
    }

    useEffect(() => {
        const resFiltered = searchByName(products, searchTerm);
        setFilteredProducts(resFiltered)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])

    return (
        <ProductsView products={filteredProducts} title={null} />
    )
}