"use client"

import Link from "next/link"

//import "./navbar.css";


export default function NavbarLinks ({categories}) {
return (
  categories &&
    categories?.map((category) => (
        <div key={category.id} className="dropdown  hover:text-primary">
          {category.subcategories.length > 0 &&
            category.name !== "Outlet" && (
              <span className=" mx-6  cursor-pointer navLink hover:text-primary ">
                {category.name}
              </span>
            )}
          {category.subcategories.length > 0 && (
            <div className="dropdown-content  text-sm text-secondary ">
              {
                category &&
              category?.subcategories?.map((subcategory) => (
                <Link
                href={`/products/${subcategory.id}`}
                  key={subcategory.id}
                  id={subcategory.id}
                  className=" cursor-pointer navLink hover:text-primary block py-1"
                >
                  {subcategory.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))
)

}