"use client"

import Link from "next/link"
import NavbarLinks from "./NavbarLinks"
import { useContext } from "react"
import { AppContext } from "../lib/AppContext"
import SearchBar from "./SearchBar"


export default function NavbarLinksDesktop({ categories }) {

    const { searchBarIsOpen, setSearchBarIsOpen } = useContext(AppContext)


    return (
        <div className="flex w-9/12 justify-center capitalize tracking-wide text-lg font-[400]		 ">
            {!searchBarIsOpen &&
                <div className=" self-center">
                    <div className="dropdown bg-primary rounded-full hover:text-primary">
                        <Link
                            href="/products/novelties"      
                            id="novelties"
                            /* onClick={(e) => CategoriesHandleClick(e.target.id)} */
                            className=" mx-6   cursor-pointer navLink hover:text-white  "
                        >
                            Novedades
                        </Link>
                    </div>
                    <NavbarLinks categories={categories} />
                    <div className="dropdown  hover:text-primary">
                        <div className="	">
                            <Link
                                href="/products/discounts"
                                className=" mx-6   cursor-pointer navLink hover:text-primary "
                                id="discount"
                            /* onClick={(e) => CategoriesHandleClick(e.target.id)} */
                            >
                                Rebajas
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown  hover:text-primary" name="/outletView">
                        <Link
                            href="/products/outlet"
                            id="outlet"
                            className=" mx-6   cursor-pointer navLink hover:text-primary "
                        /*  onClick={(e) => CategoriesHandleClick(e.target.id)} */
                        >
                            Outlet
                        </Link>
                    </div>
                </div>}
            <SearchBar />
        </div>
    )
}