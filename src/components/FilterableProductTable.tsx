import { useEffect, useState } from "react"
import { PRODUCTS } from "../products"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

const FilterableProductTable = () => {
  const [allProducts, setAllProducts] = useState<
    {
      category: string
      price: string
      stocked: boolean
      name: string
    }[]
  >(PRODUCTS)
  // useEffect(() => {
  //   setAllProducts(PRODUCTS)
  // }, [])
  return (
    <>
      <SearchBar allProducts={allProducts} setAllProducts={setAllProducts} />
      <ProductTable allProducts={allProducts} />
    </>
  )
}

export default FilterableProductTable
