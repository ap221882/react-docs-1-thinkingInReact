import React from "react"
import { PRODUCTS } from "../products"
import Category from "./Category"
import Product from "./Product"

type Props = {
  category: string
}

const ProductRow = (props: Props) => {
  return (
    <>
      <Category category={props.category} />
      {PRODUCTS.map((product) => {
        return <Product product={product} />
      })}
    </>
  )
}

export default ProductRow
