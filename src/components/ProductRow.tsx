import React from "react"
import Category from "./Category"
import Product from "./Product"

type Props = {
  category: string
  allProducts: {
    category: string
    price: string
    stocked: boolean
    name: string
  }[]
}

const ProductRow = ({ allProducts, category }: Props) => {
  return (
    <>
      <Category category={category} />
      {allProducts.map((product, index) => {
        return <Product key={index} product={product} />
      })}
    </>
  )
}

export default ProductRow
