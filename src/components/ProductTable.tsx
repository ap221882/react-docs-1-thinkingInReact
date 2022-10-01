import React, { useState, useEffect } from "react"
import { PRODUCTS } from "../products"
import ProductRow from "./ProductRow"

type Props = {
  allProducts: {
    category: string
    price: string
    stocked: boolean
    name: string
  }[]
}
const ProductTable = ({ allProducts }: Props) => {
  const [rows, setRows] = useState<JSX.Element[]>([])

  useEffect(() => {
    let rowsTemp = []
    let categories: string[] = []
    allProducts.map((product) => {
      if (!categories.find((cat) => product.category === cat)) {
        categories.push(product.category)
      }
    })
    setRows(
      categories.map((category, index) => {
        return (
          <ProductRow
            key={index}
            category={category}
            allProducts={allProducts}
          />
        )
      })
    )
  }, [allProducts])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable
