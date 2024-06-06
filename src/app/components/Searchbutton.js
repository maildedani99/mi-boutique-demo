"use client"
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { AppContext } from "../lib/AppContext";
import Link from "next/link";


export default function SearchButton() {

    const { searchBarIsOpen, setSearchBarIsOpen } = useContext(AppContext)

    const handleClickSearchButton = () => {
        setSearchBarIsOpen(!searchBarIsOpen)
    }


    return (
        <Link href="/products/search" >
            <FiSearch
                className="mx-auto my-auto cursor-pointer" size={25} color="#636364"
                onClick={handleClickSearchButton}
            />
        </Link>

    )
}