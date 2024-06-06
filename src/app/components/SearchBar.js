"use client"

import { useContext } from "react"
import { AppContext } from "../lib/AppContext"
import { MdClose } from 'react-icons/md';
import { FiSearch } from "react-icons/fi";


import styles from "../lib/styles.module.css"

export default function SearchBar() {

    const { searchBarIsOpen, setSearchBarIsOpen, searchTerm, setSearchTerm } = useContext(AppContext)

    const handleClickCloseButton = () => {
        setSearchBarIsOpen(!searchBarIsOpen)
    }

    const handleChangeInputSearch = (value) => {
        setSearchTerm(value)
    }


    return (
        <div className={searchBarIsOpen ? styles.searchBarOpen : styles.searchBarClose}>
            <div className="flex w-full ">
                <div className=" flex  border-b mt-10  border-primary mx-auto">
                    <FiSearch   size={25} className="my-auto" color="#929292"/>
                    <input
                        type="text"
                        className=" mx-auto w-[50vw] ml-4 text-xl  my-auto   outline-none"
                        placeholder="Busca aquí tu producto..."
                        onChange={(e)=>handleChangeInputSearch(e.target.value)}
                    />
                    <MdClose size={30} className="my-auto cursor-pointer" color="#929292" onClick={handleClickCloseButton} />
                </div>
            </div>
        </div>
    )
}