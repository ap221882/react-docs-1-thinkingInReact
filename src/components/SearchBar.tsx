import React, { Dispatch, SetStateAction, useState } from "react"
import { PRODUCTS } from "../products"

type Props = {
  allProducts: {
    category: string
    price: string
    stocked: boolean
    name: string
  }[]
  setAllProducts: Dispatch<
    SetStateAction<
      {
        category: string
        price: string
        stocked: boolean
        name: string
      }[]
    >
  >
}

const SearchBar = ({ allProducts, setAllProducts }: Props) => {
  const [filterText, setFilterText] = useState<string>("")
  const [inStockOnly, setInStockOnly] = useState<boolean>(false)

  const handleInputChange = (e: any) => {
    setFilterText(e.target.value)
    const searchPath = "^" + e.target.value
    const searchPathRegex = new RegExp(searchPath)
    if (e.target.value === "") {
      setAllProducts(PRODUCTS)
    } else {
      let tempFilteredProducts = allProducts.filter((prod) =>
        searchPathRegex.test(prod.name)
      )
      setAllProducts(tempFilteredProducts)
    }
  }

  const handleCheckboxChange = (e: any) => {
    console.log(e)
    const inStockOnlyTemp = inStockOnly
    if (!inStockOnlyTemp) {
      const tempFilteredProducts = PRODUCTS.filter(
        (prod) => prod.stocked === false
      )
      setAllProducts(tempFilteredProducts)
    } else {
      setAllProducts(PRODUCTS)
    }
    // {
    //   const tempFilteredProducts = PRODUCTS.filter(
    //     (prod) => prod.stocked === false
    //   )
    //   console.log(tempFilteredProducts, "tempFilteredProductsß")
    //   setAllProducts(tempFilteredProducts)
    // }
    setInStockOnly((stockOnly) => !stockOnly)
  }

  return (
    <form>
      <input
        type='text'
        value={filterText}
        onChange={handleInputChange}
        placeholder='Search...'
      />
      <label>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  )
}

export default SearchBar
